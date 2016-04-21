/**
 * 任务查看表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.issue.view.IssueViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.issue.viewModel.IssueViewModel',
        'kalix.admin.user.store.UserStore',
        'kalix.pms.project.component.ProjectComboBox'
    ],
    alias: 'widget.issueViewWindow',
    viewModel: 'issueViewModel',
    xtype: "issueViewWindow",
    width: 600,
    //todo 在此修改查看字段
    items: [{
        defaults: {readOnly: true},
        xtype: 'baseForm',
        items: [
            {
                xtype: 'projectComboBox',
                fieldLabel: '项目名称',
                name: 'projectId',
                allowBlank: false,
                bind: {
                    value: '{rec.projectId}'
                }
            },
            {
                fieldLabel: '影片元素类型主键id',
                allowBlank: false,
                bind: {
                    value: '{rec.dataTypeId}'
                }
            },
            {
                fieldLabel: '影片元素主键id',
                allowBlank: false,
                bind: {
                    value: '{rec.dataId}'
                }
            },
            {
                fieldLabel: '工作流节点序号',
                allowBlank: false,
                bind: {
                    value: '{rec.workflowNodeOrderId}'
                }
            },
            {
                fieldLabel: '难度主键id',
                allowBlank: false,
                bind: {
                    value: '{rec.difficultyId}'
                }
            },
            {
                fieldLabel: '状态主键id',
                allowBlank: false,
                bind: {
                    value: '{rec.statusId}'
                }
            },
            {
                fieldLabel: '优先级id',
                allowBlank: false,
                bind: {
                    value: '{rec.priorityId}'
                }
            },
            {
                fieldLabel: '指派给id',
                allowBlank: false,
                bind: {
                    value: '{rec.assignedToId}'
                }
            },
            {
                fieldLabel: '开始时间',
                allowBlank: false,
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.startDate}'
                }
            },
            {
                fieldLabel: '计划结束时间',
                allowBlank: false,
                xtype: 'datefield',
                format: 'Y-m-d',
                bind: {
                    value: '{rec.dueDate}'
                }
            },
            {
                fieldLabel: '预计时间(小时)',
                allowBlank: false,
                bind: {
                    value: '{rec.estimatedHours}'
                }
            },
            {
                fieldLabel: '主题',
                allowBlank: false,
                bind: {
                    value: '{rec.subject}'
                }
            },
            {
                xtype: 'textareafield',
                height: 150,
                fieldLabel: '描述',
                allowBlank: false,
                bind: {
                    value: '{rec.description}'
                }
            }

            //,
            //{
            //    fieldLabel: '种类',
            //    allowBlank: false,
            //    bind: {
            //        value: '{rec.categoryId}'
            //    }
            //},
            //{
            //    fieldLabel: '修订版本id',
            //    allowBlank: false,
            //    bind: {
            //        value: '{rec.fixedVersionId}'
            //    }
            //},
            //{
            //    fieldLabel: '锁定版本',
            //    allowBlank: false,
            //    bind: {
            //        value: '{rec.lockVersion}'
            //    }
            //},
            //
            //{
            //    fieldLabel: '实际结束时间',
            //    allowBlank: false,
            //    xtype: 'datefield',
            //    format: 'Y-m-d',
            //    bind: {
            //        value: '{rec.endDate}'
            //    }
            //},
            //{
            //    fieldLabel: '完成百分比',
            //    allowBlank: false,
            //    xtype: 'numberfield',
            //    bind: {
            //        value: '{rec.doneRadio}'
            //    }
            //},
            //
            //{
            //    fieldLabel: '任务标识',
            //    allowBlank: false,
            //    bind: {
            //        value: '{rec.issueIdentifier}'
            //    }
            //},
            //{
            //    fieldLabel: '是否开启',
            //    allowBlank: false,
            //    bind: {
            //        value: '{rec.enable}'
            //    }
            //},
            //
            //{
            //    fieldLabel: '父任务id',
            //    allowBlank: false,
            //    bind: {
            //        value: '{rec.parentIssueId}'
            //    }
            //},
            //{
            //    fieldLabel: '动画时长',
            //    allowBlank: false,
            //    xtype: 'numberfield',
            //    bind: {
            //        value: '{rec.cartoonTime}'
            //    }
            //},
            //{
            //    fieldLabel: '审核人',
            //    allowBlank: false,
            //    bind: {
            //        value: '{rec.examiner}'
            //    }
            //},
            //{
            //    fieldLabel: '是否可以开始',
            //    allowBlank: false,
            //    bind: {
            //        value: '{rec.canStart}'
            //    }
            //},
            //{
            //    fieldLabel: '工艺流id',
            //    allowBlank: false,
            //    bind: {
            //        value: '{rec.craftId}'
            //    }
            //},
            //{
            //    fieldLabel: '输出边任务id',
            //    allowBlank: false,
            //    bind: {
            //        value: '{rec.outEdgeMxId}'
            //    }
            //}
        ]
    }]
});