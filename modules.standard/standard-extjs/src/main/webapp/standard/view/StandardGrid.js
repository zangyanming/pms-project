/**
 * 项目规范表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.standard.view.StandardGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.standard.controller.StandardGridController',
        'kalix.pms.standard.store.StandardStore',
    ],
    alias: 'widget.standardGrid',
    xtype: 'standardGridPanel',
    controller: {
        type: 'standardGridController',
        storeId: 'standardStore',
        cfgForm: 'kalix.pms.standard.view.StandardWindow',
        cfgViewForm: 'kalix.pms.standard.view.StandardViewWindow',
        cfgModel: 'kalix.pms.standard.model.StandardModel'
    },
    store: {
        type: 'standardStore'
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
                hidden: true,
            },
            	{
            		text: '项目主键id',
            		dataIndex: 'projectId'
            	},
            	{
            		text: '文件名',
            		dataIndex: 'fileName'
            	},
            	{
            		text: '文件路径',
            		dataIndex: 'filePath'
            	},
            	{
            		text: '文件描述',
            		dataIndex: 'description'
            	},
            	{
            		text: '文件大小',
            		dataIndex: 'fileSize'
            	},
            	{
            		text: '文件类型',
            		dataIndex: 'fileType'
            	},

            {
                xtype: 'securityGridColumnRUD',
                //todo change permission
                permissions: [
                    'pms:projectModule:standardMenu:view',
                    'pms:projectModule:standardMenu:edit',
                    'pms:projectModule:standardMenu:delete'
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
                permission: 'pms:projectModule:standardMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
