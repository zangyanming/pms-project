/**
 * 项目成员查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.user.view.ProjectUserSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.userSearchForm',
	requires:[
		'kalix.pms.project.component.ProjectComboBox'
	],
    xtype: 'userSearchForm',
    storeId: 'userStore',
    items: [
    	{
			xtype: 'projectComboBox',
			fieldLabel: '项目名称',
			allowBlank: true,
			name:'projectId'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '组主键id',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'groupId'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '用户主键id',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'userId'
    	}
    ]
});
