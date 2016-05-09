/**
 * 影片元素查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.element.view.PropertyElementViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.element.viewModel.MovieElementViewModel',
        'kalix.admin.dict.component.DictCombobox'
    ],
    alias: 'widget.propertyElementViewWindow',
    viewModel: 'elementViewModel',
    xtype: "propertyElementViewWindow",
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
                fieldLabel: '道具标识',
                allowBlank: false,
                bind: {
                    value: '{rec.identifier}'
                }
            },
            {
                fieldLabel: '类型',
                allowBlank: false,
                xtype: 'dictCombobox',
                dictType: 'pms_property_type',
                bind: {
                    value: '{rec.elementsType}'
                }
            },
            {
                fieldLabel: '道具名称',
                allowBlank: false,
                bind: {
                    value: '{rec.elementName}'
                }
            }
        ]
    }]
});