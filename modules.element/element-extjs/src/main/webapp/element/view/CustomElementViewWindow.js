/**
 * 影片元素查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.element.view.CustomElementViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.element.viewModel.MovieElementViewModel'
    ],
    alias: 'widget.customElementViewWindow',
    viewModel: 'elementViewModel',
    xtype: "customElementViewWindow",
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
                fieldLabel: '元素名称',
                allowBlank: false,
                bind: {
                    value: '{rec.elementName}'
                }
            },
            {
                fieldLabel: '项目描述',
                allowBlank: false,
                bind: {
                    value: '{rec.descriptionOne}'
                }
            }
        ]
    }]
});