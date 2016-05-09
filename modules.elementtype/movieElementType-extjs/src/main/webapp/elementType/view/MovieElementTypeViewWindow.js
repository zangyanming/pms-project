/**
 * 影片元素类型查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.elementType.view.MovieElementTypeViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.elementType.viewModel.MovieElementTypeViewModel',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.movieElementTypeViewWindow',
    viewModel: 'movieElementTypeViewModel',
    xtype: "movieElementTypeViewWindow",
    width: 400,
    //todo 在此修改查看字段
    items: [{
        defaults: {readOnly: true},
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
    }]
});