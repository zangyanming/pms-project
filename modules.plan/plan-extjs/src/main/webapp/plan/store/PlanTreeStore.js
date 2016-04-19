/**
 * 项目计划数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.plan.store.PlanTreeStore', {
    extend: 'Ext.data.TreeStore',
    model: 'kalix.pms.plan.model.PlanModel',
    alias: 'store.planTreeStore',
    xtype: 'planTreeStore',
    storeId: "planTreeStore",
    proxy:{
        type:'ajax',
        url: CONFIG.restRoot + '/camel/rest/plans/treePlans'
    }
});