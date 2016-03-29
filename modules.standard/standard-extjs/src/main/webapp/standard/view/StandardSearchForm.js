/**
 * 项目规范查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.standard.view.StandardSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
	requires:[
		'kalix.pms.project.component.ProjectComboBox'
	],
    alias: 'widget.standardSearchForm',
    xtype: 'standardSearchForm',
    storeId: 'standardStore',
    items: [
    	{
    		xtype: 'projectComboBox',
    		fieldLabel: '项目名称',
			allowBlank: true,
			name:'projectId'
    	}
    ]

});
