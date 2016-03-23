/**
 * 项目查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.project.view.ProjectSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.projectSearchForm',
    xtype: 'projectSearchForm',
    storeId: 'projectStore',
    items: [
    	{
    		xtype: 'textfield',
    		fieldLabel: '项目名称',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'projectName'
    	},
		{
			xtype: 'textfield',
			fieldLabel: '项目负责人',
			labelAlign: 'right',
			labelWidth: 80,
			width: 200,
			name: 'manager'
		},
    	{
    		xtype: 'textfield',
    		fieldLabel: '项目投资方',
    		labelAlign: 'right',
    		labelWidth: 80,
    		width: 200,
    		name: 'investor'
    	}
    ]

});
