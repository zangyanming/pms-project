/**
 * 项目成员查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.user.view.ProjectUserViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
        requires: [
            'kalix.pms.user.viewModel.ProjectUserViewModel'
        ],
        alias: 'widget.userViewWindow',
        viewModel: 'userViewModel',
        xtype: "userViewWindow",
        width: 400,
    //todo 在此修改查看字段
    items: [{
            defaults: {readOnly: true},
            xtype: 'baseForm',
            items: [
                	{
                		fieldLabel: '项目名称',
                		allowBlank: false,
                		bind: {
                			value: '{rec.projectName}'
                		}
                	},
                	{
                		fieldLabel: '组名称',
                		allowBlank: false,
                		bind: {
                			value: '{rec.groupName}'
                		}
                	},
                	{
                		fieldLabel: '用户名称',
                		allowBlank: false,
                		bind: {
                			value: '{rec.userName}'
                		}
                	},
                	{
                		fieldLabel: '是否是主管',
                		allowBlank: false,
						readOnly: true,
						xtype: 'combobox',
						editable: false,
						valueField: 'isDataSupervisor',
						displayField: 'name',
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
						readOnly: true,
						xtype: 'combobox',
						editable: false,
						valueField: 'isAssignTask',
						displayField: 'name',
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