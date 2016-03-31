/**
 * 组表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.group.controller.GroupGridController', {
    extend: 'kalix.controller.BaseGridController',
    alias: 'controller.groupGridController',
    requires: [
        'kalix.admin.user.view.UserAddItemSelector'
    ],
    /**
     * 保存添加信息
     */
    onSaveAddUser: function (groupUserUrl, userAddForm, rec) {
        if (userAddForm != null && userAddForm.isValid()) {
            var userIds = userAddForm.down('#userAddItemSelector').getValue();
            var groupId = rec.data.id;
            Ext.Ajax.request({
                url: groupUserUrl,
                paramsAsJson: true,
                params: {
                    'groupId': groupId,
                    'userIds': userIds.join(',')
                },
                method: 'GET',
                callback: function (options, success, response) {
                    var resp = Ext.JSON.decode(response.responseText);
                    if (resp != null && resp.success) {
                        kalix.core.Notify.success(resp.msg, CONFIG.ALTER_TITLE_SUCCESS);
                    } else {
                        Ext.MessageBox.alert(CONFIG.ALTER_TITLE_FAILURE, resp.msg);
                    }
                }
            });
        }
    },
    /**
     * 添加用户.
     */
    onAddUser: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        if (rec == null) {
            Ext.MessageBox.alert(CONFIG.ALTER_TITLE_INFO, '请选择要添加用户的组!');
            return;
        }

        var win = Ext.create('Ext.Window', {
            width: 710,
            border: false,
            modal: true,
            icon: 'admin/resources/images/group_add.png',
            title: '添加用户',
            items: [
                {
                    xtype: 'displayfield',
                    labelAlign: 'right',
                    fieldLabel: '&nbsp;&nbsp;&nbsp;&nbsp;组',
                    labelWidth: 60,
                    value: rec.data.groupName
                }]
        });
        win.show();
        var loadMask = new Ext.LoadMask({
            msg: '加载中...',
            target: win
        });
        loadMask.show();
        var groupUserUrl = this.getViewModel().get('url') + '/groupUsers';
        var me = this;
        //获得已选用户
        Ext.Ajax.request({
            url: groupUserUrl + '/users/' + rec.data.id,
            method: 'GET',
            callback: function (options, success, response) {
                var users = Ext.JSON.decode(response.responseText);
                var dataStore = Ext.create('kalix.admin.user.store.UserItemSelectorStore');
                dataStore.setProxy({
                    type: 'ajax',
                    limitParam: null,
                    url: groupUserUrl + '/users/all/' + rec.data.id,
                    reader: {
                        type: 'json',
                        root: 'data',
                        totalProperty: 'totalCount'
                    }
                });
                var addUserForm = Ext.create('Ext.form.Panel', {
                    width: 700,
                    itemId: 'addUserForm',
                    bodyPadding: 10,
                    layout: 'fit',
                    items: [
                        {
                            itemId: 'userAddItemSelector',
                            xtype: 'userAddItemSelector',
                            value: users,
                            height: 400,
                            store: dataStore
                        }
                    ],
                    buttons: [
                        {
                            text: '保存', glyph: 'xf0c7@FontAwesome', handler: function () {
                            me.onSaveAddUser(groupUserUrl, this.up('#addUserForm'), rec);
                        }
                        },
                        {
                            text: '重置', glyph: 'xf0e2@FontAwesome', handler: function () {
                            var field = this.up('#addUserForm').down('#userAddItemSelector');
                            if (!field.disabled) {
                                field.clearValue();
                            }
                        }
                        }
                    ]
                });
                win.add(addUserForm);
                loadMask.hide();
            }
        });
    }
});
