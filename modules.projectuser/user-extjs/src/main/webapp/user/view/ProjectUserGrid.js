/**
 * 项目成员表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.user.view.ProjectUserGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.user.controller.ProjectUserGridController',
        'kalix.pms.user.store.ProjectUserStore'
    ],
    alias: 'widget.userGrid',
    xtype: 'userGridPanel',
    controller: {
        type: 'userGridController',
        storeId: 'projectUserStore',
        cfgForm: 'kalix.pms.user.view.ProjectUserWindow',
        cfgViewForm: 'kalix.pms.user.view.ProjectUserViewWindow',
        cfgModel: 'kalix.pms.user.model.ProjectUserModel'
    },
    store: {
        type: 'projectUserStore'
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
                hidden: true
            },
            {
                text: '项目名称',
                dataIndex: 'projectName'
            },
            {
                text: '组名称',
                dataIndex: 'groupName'
            },
            {
                text: '用户',
                dataIndex: 'userName'
            },
            {
                text: '是否是主管',
                trueText: '是',
                falseText: '否',
                xtype: 'booleancolumn',
                dataIndex: 'isDataSupervisor',
                renderer: null
            },
            {
                text: '是否分配任务',
                trueText: '是',
                falseText: '否',
                xtype: 'booleancolumn',
                dataIndex: 'isAssignTask',
                renderer: null
            },

            {
                xtype: 'securityGridColumnRUD',
                //todo change permission
                permissions: [
                    'pms:projectModule:projectUserMenu:view',
                    'pms:projectModule:projectUserMenu:edit',
                    'pms:projectModule:projectUserMenu:delete'
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
                permission: 'pms:projectModule:projectUserMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
