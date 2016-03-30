/**
 * 项目规范首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.standard.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.pms.project.view.ProjectGrid',
        'kalix.pms.standard.view.StandardGridMain',
        'kalix.pms.standard.view.StandardSearchForm',
        'kalix.pms.standard.viewModel.StandardViewModel'
    ],
    storeId: 'standardStore',
    viewModel: 'standardViewModel',
    items: [
        {
            title: '项目规范查询',
            iconCls: 'x-fa fa-search',
            xtype: 'standardSearchForm'
        },
        {
            xtype: 'standardGridMain',
            id: 'standardGridMain',
            title: '项目规范列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
