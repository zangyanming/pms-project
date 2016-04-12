/**
 * 项目成员首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.user.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.pms.user.view.ProjectUserGrid',
        'kalix.pms.user.view.ProjectUserSearchForm',
        'kalix.pms.user.viewModel.ProjectUserViewModel'
    ],
    storeId: 'projectUserStore',
    viewModel: 'userViewModel',
    items: [
        {
            title: '项目成员查询',
            iconCls: 'x-fa fa-search',
            xtype: 'userSearchForm'
        }, {
            xtype: 'userGridPanel',
            id: 'userGridPanel',
            title: '项目成员列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
