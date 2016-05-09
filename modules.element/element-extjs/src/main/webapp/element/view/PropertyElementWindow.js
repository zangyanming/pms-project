/**
 * 影片元素新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.view.PropertyElementWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.element.viewModel.MovieElementViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.dict.component.DictCombobox'
    ],
    alias: 'widget.propertyElementWindow',
    xtype: "propertyElementWindow",
    viewModel: 'elementViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'elementStore'
    },
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
        }
    ]
});