/**
 * 项目规范数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('vixo.app.standard.store.StandardStore', {
    extend: 'kalix.store.BaseStore',
    model: 'vixo.app.standard.model.StandardModel',
    alias: 'store.standardStore',
    xtype: 'standardStore',
    storeId: "standardStore",
    proxyUrl: '/kalix/camel/rest/standards'
});