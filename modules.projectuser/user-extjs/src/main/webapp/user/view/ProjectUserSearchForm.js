/**
 * 项目成员查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.user.view.ProjectUserSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.userSearchForm',
	requires:[
		'kalix.pms.project.component.ProjectComboBox',
		'kalix.pms.group.component.GroupComboBox',
		'kalix.admin.user.component.UserComboBox',
		'kalix.pms.user.store.ProjectUserStore'
	],
    xtype: 'userSearchForm',
    storeId: 'projectUserStore',
    items: [
    	{
			xtype: 'projectComboBox',
			fieldLabel: '项目名称',
			allowBlank: true,
			name:'projectId'
    	},
		{
			xtype: 'groupComboBox',
			fieldLabel: '组名称',
			allowBlank: true,
			name:'groupId'
    	},
		{
			xtype: 'userCombobox',
			fieldLabel: '用户名称',
			valueField: 'id',
			allowBlank: true,
			name:'userId'
    	}
    ]
});
