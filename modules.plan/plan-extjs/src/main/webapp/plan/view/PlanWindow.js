/**
 * 项目计划新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.plan.view.PlanWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.plan.viewModel.PlanViewModel',
        'kalix.pms.plan.controller.PlanWindowController',
        'kalix.pms.plan.store.PlanStore',
        'kalix.pms.project.component.ProjectComboBox'
    ],
    alias: 'widget.planWindow',
    viewModel: 'planViewModel',
    controller: {
        type: 'planWindowController',
        storeId: 'planStore',
        treeStoreId:'planTreeStore'
    },
    xtype: "planWindow",
    width: 400,
    //todo 在此修改表单
    items: [
        {
            xtype: 'baseForm',
            items: [
                {
                    hidden:true,
                    readOnly:true,
                    fieldLabel: '父项目计划id',
                    allowBlank: false,
                    bind: {
                        value: '{rec.parentProjectPlanId}'
                    }
                },
                {
                    readOnly:true,
                    fieldLabel: '父项目计划名称',
                    allowBlank: false,
                    bind: {
                        value: '{rec.parentProjectPlanName}'
                    }
                },
                {
                    //readOnly:true,
                    xtype: 'projectComboBox',
                    fieldLabel: '项目名称',
                    name:'projectId',
                    allowBlank: false,
                    bind: {
                        value: '{rec.projectId}'
                    }
                },
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
                    fieldLabel: '计划开始时间',
                    allowBlank: false,
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    bind: {
                        value: '{rec.planBeginTime}'
                    }
                },
                {
                    fieldLabel: '计划结束时间',
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
                }
            ]
        }
    ]
});