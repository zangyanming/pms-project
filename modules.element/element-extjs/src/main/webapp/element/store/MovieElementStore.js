/**
 * 影片元素数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.store.MovieElementStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.element.model.MovieElementModel',
    alias: 'store.elementStore',
    xtype: 'elementStore',
    storeId: "elementStore",
    autoLoad:false,
    proxyUrl: '/kalix/camel/rest/elements',
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