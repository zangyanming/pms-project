/**
 * 影片元素类型首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.elementType.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.pms.elementType.view.MovieElementTypeGrid',
        'kalix.pms.elementType.view.MovieElementTypeSearchForm',
        'kalix.pms.elementType.viewModel.MovieElementTypeViewModel'
    ],
    storeId: 'movieElementTypeStore',
    viewModel: 'movieElementTypeViewModel',
    items: [
        {
            title: '影片元素类型查询',
            iconCls: 'x-fa fa-search',
            xtype: 'movieElementTypeSearchForm'
        }, {
            xtype: 'movieElementTypeGridPanel',
            id: 'movieElementTypeGridPanel',
            title: '影片元素类型列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
