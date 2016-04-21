/**
 * 任务首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.issue.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.pms.issue.view.IssueGrid',
        'kalix.pms.issue.view.IssueSearchForm',
        'kalix.pms.issue.viewModel.IssueViewModel'
    ],
    storeId: 'issueStore',
    viewModel: 'issueViewModel',
    items: [
        {
            title: '任务查询',
            iconCls: 'x-fa fa-search',
            xtype: 'issueSearchForm'
        }, {
            xtype: 'issueGridPanel',
            id: 'issueGridPanel',
            title: '任务列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
