/**
 * 镜首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.continuity.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.pms.continuity.view.ContinuityGrid',
        'kalix.pms.continuity.view.ContinuitySearchForm',
        'kalix.pms.continuity.viewModel.ContinuityViewModel'
    ],
    storeId: 'continuityStore',
    viewModel: 'continuityViewModel',
    items: [
        {
            title: '镜查询',
            iconCls: 'x-fa fa-search',
            xtype: 'continuitySearchForm'
        }, {
            xtype: 'continuityGridPanel',
            id: 'continuityGridPanel',
            title: '镜列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
