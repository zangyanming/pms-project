/**
 * 组新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.group.view.GroupWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.group.viewModel.GroupViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.groupWindow',
    viewModel: 'groupViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'groupStore'
    },
    xtype: "groupWindow",
    width: 400,
    //todo 在此修改表单
    items: [

        {
            xtype: 'baseForm',
            items: [
                {
                    fieldLabel: '组名称',
                    allowBlank: false,
                    bind: {
                        value: '{rec.groupName}'
                    }
                }
                //,
                //{
                //    fieldLabel: '组管理者',
                //    allowBlank: false,
                //    xtype: 'numberfield',
                //    bind: {
                //        value: '{rec.userId}'
                //    }
                //}
            ]
        }
    ]
});