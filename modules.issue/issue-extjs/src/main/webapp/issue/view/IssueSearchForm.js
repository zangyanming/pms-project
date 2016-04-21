/**
 * 任务查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.issue.view.IssueSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.issueSearchForm',
    requires: [
        'kalix.pms.project.component.ProjectComboBox'
    ],
    xtype: 'issueSearchForm',
    storeId: 'issueStore',
    items: [
        {
            xtype: 'projectComboBox',
            fieldLabel: '项目名称',
            allowBlank: true,
            name: 'projectId'
        },
        {
            xtype: 'textfield',
            fieldLabel: '任务名称',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'subject'
        },
        {
            xtype: 'textfield',
            fieldLabel: '指派给id',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'assignedToId'
        },
        {
            xtype: 'textfield',
            fieldLabel: '任务标识',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'issueIdentifier'
        },
        {
            xtype: 'textfield',
            fieldLabel: '审核人',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'examiner'
        }
    ]
});
