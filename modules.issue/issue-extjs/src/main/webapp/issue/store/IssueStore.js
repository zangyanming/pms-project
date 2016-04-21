/**
 * 任务数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.issue.store.IssueStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.issue.model.IssueModel',
    alias: 'store.issueStore',
    xtype: 'issueStore',
    storeId: "issueStore",
    proxyUrl: '/kalix/camel/rest/issues'
});