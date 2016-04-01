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
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.userWindow',
    viewModel: 'userViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'userStore'
    },
    xtype: "userWindow",
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
            		fieldLabel: '组主键id',
            		allowBlank: false,
            		bind: {
            			value: '{rec.groupId}'
            		}
            	},
            	{
            		fieldLabel: '用户主键id',
            		allowBlank: false,
            		bind: {
            			value: '{rec.userId}'
            		}
            	},
            	{
            		fieldLabel: '是否是主管',
            		allowBlank: false,
            		bind: {
            			value: '{rec.isDataSupervisor}'
            		}
            	},
            	{
            		fieldLabel: '是否分配任务',
            		allowBlank: false,
            		bind: {
            			value: '{rec.isAssignTask}'
            		}
            	}
        ]
        }
    ]
});