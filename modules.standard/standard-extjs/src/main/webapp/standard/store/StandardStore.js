/**
 * 项目规范数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.standard.store.StandardStore', {
    extend: 'kalix.store.BaseStore',
    alias: 'store.standardStore',
    xtype: 'standardStore',
    model: 'kalix.pms.standard.model.StandardModel',
    autoLoad:true,
    storeId: "standardStore",
    proxyUrl: CONFIG.restRoot + '/camel/rest/standards'
});