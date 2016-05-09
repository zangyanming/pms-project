/**
 * 集数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.episode.store.EpisodeStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.episode.model.EpisodeModel',
    alias: 'store.episodeStore',
    xtype: 'episodeStore',
    storeId: "episodeStore",
    autoLoad: false,
    proxyUrl: '/kalix/camel/rest/episodes',
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