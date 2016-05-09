/**
 * 影片元素类型查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.elementType.view.MovieElementTypeSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.movieElementTypeSearchForm',
    requires:[
        'kalix.pms.project.component.ProjectComboBox'
    ],
    xtype: 'movieElementTypeSearchForm',
    storeId: 'movieElementTypeStore',
    items: [
        {
            xtype: 'projectComboBox',
            fieldLabel: '项目名称',
            allowBlank: true,
            name:'projectId'
        }
    ]
});
