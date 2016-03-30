/**
 * 组数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.group.store.GroupStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.pms.group.model.GroupModel',
    alias: 'store.groupStore',
    xtype: 'groupStore',
    storeId: "groupStore",
    proxyUrl: '/kalix/camel/rest/groups'
});