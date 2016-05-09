/**
 * 场数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.field.store.FieldStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.field.model.FieldModel',
    alias: 'store.fieldStore',
    xtype: 'fieldStore',
    storeId: "fieldStore",
    autoLoad: false,
    proxyUrl: '/kalix/camel/rest/fields',
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