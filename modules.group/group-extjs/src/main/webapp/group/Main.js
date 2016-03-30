/**
 * 组首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.group.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.pms.group.view.GroupGrid',
        'kalix.pms.group.view.GroupSearchForm',
        'kalix.pms.group.viewModel.GroupViewModel'
    ],
    storeId: 'groupStore',
    viewModel: 'groupViewModel',
    items: [
        {
            title: '组查询',
            iconCls: 'x-fa fa-search',
            xtype: 'groupSearchForm'
        }, {
            xtype: 'groupGridPanel',
            id: 'groupGridPanel',
            title: '组列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
