/**
 * 项目数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.project.store.ProjectStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.project.model.ProjectModel',
    alias: 'store.projectStore',
    xtype: 'projectStore',
    storeId: "projectStore",
    proxyUrl: CONFIG.restRoot+ '/camel/rest/projects'
});