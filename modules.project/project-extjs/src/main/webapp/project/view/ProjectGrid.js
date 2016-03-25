/**
 * 项目表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.project.view.ProjectGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.project.controller.ProjectGridController',
        'kalix.pms.project.store.ProjectStore'
    ],
    alias: 'widget.projectGrid',
    xtype: 'projectGridPanel',
    controller: {
        type: 'projectGridController',
        storeId: 'projectStore',
        cfgForm: 'kalix.pms.project.view.ProjectWindow',
        cfgViewForm: 'kalix.pms.project.view.ProjectViewWindow',
        cfgModel: 'kalix.pms.project.model.ProjectModel'
    },
    store: {
        type: 'projectStore'
    },

    //todo 在此修改grid显示列
    columns: {
        defaults: {flex: 1,renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex: 0,
                align: 'center',
                renderer:this.update
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
                text: '项目标识',
                dataIndex: 'identifier'
            },
			{
				text: '项目负责人',
				dataIndex: 'manager'
			},
			{
				text: '项目投资方',
				dataIndex: 'investor'
			},
			{
				text: '项目客户',
				dataIndex: 'customer'
			},
			{
				xtype: 'securityGridColumnRUD',
				//todo change permission
				permissions: [
					'pms:projectModule:projectMenu:view',
					'pms:projectModule:projectMenu:edit',
					'pms:projectModule:projectMenu:delete'
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
                permission: 'pms:projectModule:projectMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
