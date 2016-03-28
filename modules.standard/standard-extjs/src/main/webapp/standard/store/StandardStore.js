/**
 * 项目规范数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.standard.store.StandardStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.standard.model.StandardModel',
    alias: 'store.standardStore',
    xtype: 'standardStore',
    storeId: "standardStore",
    proxyUrl: '/kalix/camel/rest/standards'
});