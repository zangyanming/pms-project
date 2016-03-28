/**
 * 项目规范新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.standard.view.StandardWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.standard.viewModel.StandardViewModel',
        'kalix.controller.BaseWindowController'
    ],
    alias: 'widget.standardWindow',
    viewModel: 'standardViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'standardStore'
    },
    xtype: "standardWindow",
    width: 400,
    //todo 在此修改表单
    items: [

        {
        xtype: 'baseForm',
        items: [
            	{
            		fieldLabel: '项目主键id',
            		allowBlank: false,
            		bind: {
            			value: '{rec.projectId}'
            		}
            	},
            	{
            		fieldLabel: '文件名',
            		allowBlank: false,
            		bind: {
            			value: '{rec.fileName}'
            		}
            	},
            	{
            		fieldLabel: '文件路径',
            		allowBlank: false,
            		bind: {
            			value: '{rec.filePath}'
            		}
            	},
            	{
            		fieldLabel: '文件描述',
            		allowBlank: false,
            		bind: {
            			value: '{rec.description}'
            		}
            	},
            	{
            		fieldLabel: '文件大小',
            		allowBlank: false,
            		bind: {
            			value: '{rec.fileSize}'
            		}
            	},
            	{
            		fieldLabel: '文件类型',
            		allowBlank: false,
            		bind: {
            			value: '{rec.fileType}'
            		}
            	}
        ]
        }
    ]
});