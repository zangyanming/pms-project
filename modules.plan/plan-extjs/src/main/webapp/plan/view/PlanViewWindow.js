/**
 * 项目计划查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.plan.view.PlanViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
        requires: [
            'kalix.pms.plan.viewModel.PlanViewModel',
            'kalix.admin.user.store.UserStore'
        ],
        alias: 'widget.planViewWindow',
        viewModel: 'planViewModel',
        xtype: "planViewWindow",
        width: 400,
    //todo 在此修改查看字段
    items: [{
            defaults: {readOnly: true},
            xtype: 'baseForm',
            items: [
                	{
                		fieldLabel: '项目计划名称',
                		allowBlank: false,
                		bind: {
                			value: '{rec.planTaskName}'
                		}
                	},
                	{
                		fieldLabel: '项目计划工期',
                		allowBlank: false,
                		xtype: 'numberfield',
                		bind: {
                			value: '{rec.planTaskTime}'
                		}
                	},
                	{
                		fieldLabel: '项目计划开始时间',
                		allowBlank: false,
                		xtype: 'datefield',
                		format: 'Y-m-d',
                		bind: {
                			value: '{rec.planBeginTime}'
                		}
                	},
                	{
                		fieldLabel: '项目计划结束时间',
                		allowBlank: false,
                		xtype: 'datefield',
                		format: 'Y-m-d',
                		bind: {
                			value: '{rec.planEndTime}'
                		}
                	},
                	{
                		fieldLabel: '项目负责人',
                		allowBlank: false,
                		bind: {
                			value: '{rec.principal}'
                		}
                	},
                	{
                		fieldLabel: '项目里程碑',
                		allowBlank: false,
                		xtype: 'numberfield',
                		bind: {
                			value: '{rec.milestone}'
                		}
                	},
                	{
                		fieldLabel: '父项目计划id',
                		allowBlank: false,
                		bind: {
                			value: '{rec.parentProjectPlanId}'
                		}
                	},
                	{
                		fieldLabel: '项目主键id',
                		allowBlank: false,
                		bind: {
                			value: '{rec.projectId}'
                		}
                	}
            ]
            }

        ]


});