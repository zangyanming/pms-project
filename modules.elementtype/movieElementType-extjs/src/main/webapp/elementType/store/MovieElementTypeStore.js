/**
 * 影片元素类型数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.elementType.store.MovieElementTypeStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.elementType.model.MovieElementTypeModel',
    alias: 'store.movieElementTypeStore',
    xtype: 'movieElementTypeStore',
    storeId: "movieElementTypeStore",
    proxyUrl: '/kalix/camel/rest/movieElementTypes',
    pageSize:50
});