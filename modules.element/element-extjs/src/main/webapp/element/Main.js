/**
 * 影片元素首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.pms.element.view.MovieElementGrid',
        'kalix.pms.element.view.MovieElementSearchForm',
        'kalix.pms.element.viewModel.MovieElementViewModel'
    ],
    storeId: 'elementStore',
    viewModel: 'elementViewModel',
    items: [
        {
            title: '影片元素查询',
            iconCls: 'x-fa fa-search',
            xtype: 'elementSearchForm'
        }, {
            xtype: 'elementGridPanel',
            id: 'elementGridPanel',
            title: '影片元素列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
