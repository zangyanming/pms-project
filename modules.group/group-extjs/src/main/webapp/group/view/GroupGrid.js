/**
 * 组表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.group.view.GroupGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.group.controller.GroupGridController',
        'kalix.pms.group.store.GroupStore',
    ],
    alias: 'widget.groupGrid',
    xtype: 'groupGridPanel',
    controller: {
        type: 'groupGridController',
        storeId: 'groupStore',
        cfgForm: 'kalix.pms.group.view.GroupWindow',
        cfgViewForm: 'kalix.pms.group.view.GroupViewWindow',
        cfgModel: 'kalix.pms.group.model.GroupModel'
    },
    store: {
        type: 'groupStore'
    },

    //todo 在此修改grid显示列
    columns: {
        defaults: {flex: 1, renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex: 0,
                align: 'center',
                renderer: this.update
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true,
            },
            {
                text: '组名称',
                dataIndex: 'groupName'
            },
            //{
            //    text: '组管理者',
            //    dataIndex: 'userId'
            //},
            {
                xtype: 'securityGridColumnRUD',
                //todo change permission
                permissions: [
                    'admin:constructModule:groupMenu:view',
                    'admin:constructModule:groupMenu:edit',
                    'admin:constructModule:groupMenu:delete'
                ]
            }
        ]
    },
    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                //todo change permission
                permission: 'admin:constructModule:groupMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
