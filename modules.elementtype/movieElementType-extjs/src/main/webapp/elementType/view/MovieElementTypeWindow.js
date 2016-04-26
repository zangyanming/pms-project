/**
 * 影片元素类型新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.elementType.view.MovieElementTypeWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.elementType.viewModel.MovieElementTypeViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.movieElementTypeWindow',
    viewModel: 'movieElementTypeViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'movieElementTypeStore'
    },
    xtype: "movieElementTypeWindow",
    width: 400,
    //todo 在此修改表单
    items: [
        {
            xtype: 'baseForm',
            items: [
                {
                    xtype: 'projectComboBox',
                    fieldLabel: '项目名称',
                    name:'projectId',
                    allowBlank: false,
                    bind: {
                        value: '{rec.projectId}'
                    }
                },
                {
                    fieldLabel: '影片元素类别名称',
                    allowBlank: false,
                    bind: {
                        value: '{rec.movieElementsType}'
                    }
                }
            ]
        }
    ]
});