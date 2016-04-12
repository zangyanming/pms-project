/**
 * 项目成员数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.user.store.ProjectUserStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.user.model.ProjectUserModel',
    alias: 'store.projectUserStore',
    xtype: 'projectUserStore',
    storeId: "projectUserStore",
    proxyUrl: CONFIG.restRoot + '/camel/rest/projectUsers'
});