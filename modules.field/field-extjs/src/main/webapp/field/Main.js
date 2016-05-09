/**
 * 场首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.field.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.pms.field.view.FieldGrid',
        'kalix.pms.field.view.FieldSearchForm',
        'kalix.pms.field.viewModel.FieldViewModel'
    ],
    storeId: 'fieldStore',
    viewModel: 'fieldViewModel',
    items: [
        {
            title: '场查询',
            iconCls: 'x-fa fa-search',
            xtype: 'fieldSearchForm'
        }, {
            xtype: 'fieldGridPanel',
            id: 'fieldGridPanel',
            title: '场列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
