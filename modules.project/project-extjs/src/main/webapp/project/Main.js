/**
 * 项目首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.project.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.pms.project.view.ProjectGrid',
        'kalix.pms.project.view.ProjectSearchForm',
        'kalix.pms.project.viewModel.ProjectViewModel'
    ],
    storeId: 'projectStore',
    viewModel: 'projectViewModel',
    items: [
        {
            title: '项目查询',
            iconCls: 'x-fa fa-search',
            xtype: 'projectSearchForm'
        }, {
            xtype: 'projectGridPanel',
            id: 'projectGridPanel',
            title: '项目列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
