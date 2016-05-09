/**
 * 镜数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.continuity.store.ContinuityStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.continuity.model.ContinuityModel',
    alias: 'store.continuityStore',
    xtype: 'continuityStore',
    autoLoad: false,
    storeId: "continuityStore",
    proxyUrl: '/kalix/camel/rest/continuitys',
    // 传递参数，否则新增和修改会查询出所有数据
    queryParams:null,
    listeners:{
        beforeload:function(target){
            if(target.queryParams != null){
                target.proxy.extraParams = target.queryParams;
            }
        }
    }
});