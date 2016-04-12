/**
 * 项目成员新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.user.view.ProjectUserWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.user.viewModel.ProjectUserViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.pms.user.store.ProjectUserStore',
		'kalix.pms.project.component.ProjectComboBox',
		'kalix.pms.group.component.GroupComboBox',
		'kalix.admin.user.component.UserComboBox'
    ],
    alias: 'widget.userWindow',
    viewModel: 'userViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'projectUserStore'
    },
    xtype: "userWindow",
    width: 400,
    //todo 在此修改表单
    items: [

        {
        xtype: 'baseForm',
        items: [
            	{
					xtype: 'projectComboBox',
					fieldLabel: '项目名称',
					name:'projectId',
            		allowBlank: false,
            		bind: {
            			value: '{rec.projectId}'
            		}
            	},
            	{
					xtype: 'groupComboBox',
					fieldLabel: '组名称',
            		allowBlank: false,
            		bind: {
            			value: '{rec.groupId}'
            		}
            	},
            	{
					xtype: 'userCombobox',
					valueField: 'id',
					fieldLabel: '用户名称',
            		bind: {
            			value: '{rec.userId}'
            		}
            	},
            	{
            		fieldLabel: '是否是主管',
            		allowBlank: false,
					xtype: 'combobox',
					editable: false,
					valueField: 'isDataSupervisor',
					displayField: 'name',
					//fieldStyle: 'font-size:15px;text-align:center;background:transparent;',
					store: {
						data: [
							{'name': '是', 'isDataSupervisor': true},
							{'name': '否', 'isDataSupervisor': false}
						]
					},
            		bind: {
            			value: '{rec.isDataSupervisor}'
            		}
            	},
            	{
            		fieldLabel: '是否分配任务',
					allowBlank: false,
					xtype: 'combobox',
					editable: false,
					valueField: 'isAssignTask',
					displayField: 'name',
					//fieldStyle: 'font-size:15px;text-align:center;background:transparent;',
					store: {
						data: [
							{'name': '是', 'isAssignTask': true},
							{'name': '否', 'isAssignTask': false}
						]
					},
					bind: {
            			value: '{rec.isAssignTask}'
            		}
            	}
        ]
        }
    ]
});