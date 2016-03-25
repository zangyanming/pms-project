/**
 * 项目规范首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('vixo.app.standard.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'vixo.app.standard.view.StandardGrid',
        'vixo.app.standard.view.StandardSearchForm',
        'vixo.app.standard.viewModel.StandardViewModel'
    ],
    storeId: 'standardStore',
    viewModel: 'standardViewModel',
    items: [
        {
            title: '项目规范查询',
            iconCls: 'x-fa fa-search',
            xtype: 'standardSearchForm'
        }, {
            xtype: 'standardGridPanel',
            id: 'standardGridPanel',
            title: '项目规范列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
