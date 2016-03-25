/**
 * 项目规范查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('vixo.app.standard.view.StandardViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
        requires: [
            'vixo.app.standard.viewModel.StandardViewModel',
            'kalix.admin.user.store.UserStore'
        ],
        alias: 'widget.standardViewWindow',
        viewModel: 'standardViewModel',
        xtype: "standardViewWindow",
        width: 400,
    //todo 在此修改查看字段
    items: [{
            defaults: {readOnly: true},
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