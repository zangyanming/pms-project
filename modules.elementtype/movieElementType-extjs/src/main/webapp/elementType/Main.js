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
    layout: {
        type: 'border',
        padding: '0',
        bodyStyle: 'padding:15px',
        collapsible: true
    },
    height:document.documentElement.clientHeight - 55,
    items: [
        {
            region: 'north',
            title: '影片元素类型查询',
            iconCls: 'x-fa fa-search',
            xtype: 'movieElementTypeSearchForm'
        },
        {
            region: 'west',
            width: 230,
            xtype: 'movieElementTypeGridPanel',
            id: 'movieElementTypeGridPanel',
            title: '影片元素类型列表',
            iconCls: 'x-fa fa-search'
        },
        {
            region: 'center',
            title: '影片元素列表',
            iconCls: 'x-fa fa-search',
            items:[
                {xtype:'characterElementGridPanel'}
            ]
        }
    ]
});
