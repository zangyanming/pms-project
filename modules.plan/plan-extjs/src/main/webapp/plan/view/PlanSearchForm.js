/**
 * 项目计划查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.plan.view.PlanSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.planSearchForm',
	requires:[
		'kalix.pms.project.component.ProjectComboBox',
		'kalix.pms.plan.controller.PlanSearchFormController'
	],
    xtype: 'planSearchForm',
    storeId: 'planStore',
	controller:'planSearchFormController',
    items: [
		{
			xtype: 'projectComboBox',
			fieldLabel: '项目名称',
			allowBlank: true,
			name:'projectId'
		}
    ]
});
