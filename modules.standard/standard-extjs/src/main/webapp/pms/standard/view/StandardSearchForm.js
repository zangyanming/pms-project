/**
 * 项目规范查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('vixo.app.standard.view.StandardSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.standardSearchForm',
    xtype: 'standardSearchForm',
    storeId: 'standardStore',
    items: [
    	{
    		xtype: 'textfield',
    		fieldLabel: '项目主键id',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'projectId'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '文件名',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'fileName'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '文件路径',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'filePath'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '文件描述',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'description'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '文件大小',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'fileSize'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '文件类型',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'fileType'
    	}
    ]

});
