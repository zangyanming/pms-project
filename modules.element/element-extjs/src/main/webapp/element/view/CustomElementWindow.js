/**
 * 影片元素新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.view.CustomElementWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.element.viewModel.MovieElementViewModel',
        'kalix.controller.BaseWindowController'
    ],
    alias: 'widget.customElementWindow',
    xtype: "customElementWindow",
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
        }
    ]
});