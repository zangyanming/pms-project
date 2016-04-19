/**
 * 项目计划数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.plan.store.PlanStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.plan.model.PlanModel',
    alias: 'store.planStore',
    xtype: 'planStore',
    storeId: "planStore",
    autoLoad:false,
    //singleton: true,
    proxyUrl: CONFIG.restRoot + '/camel/rest/plans'
});