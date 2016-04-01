/**
 * 项目成员查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.user.view.ProjectUserViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
        requires: [
            'kalix.pms.user.viewModel.ProjectUserViewModel',
            'kalix.admin.user.store.UserStore'
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