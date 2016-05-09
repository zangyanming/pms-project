/**
 * 影片元素新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.view.CharacterElementWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.element.viewModel.MovieElementViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.dict.component.DictCombobox'
    ],
    alias: 'widget.characterElementWindow',
    xtype: "characterElementWindow",
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
                    fieldLabel: '角色标识',
                    allowBlank: false,
                    bind: {
                        value: '{rec.identifier}'
                    }
                },
                {
                    fieldLabel: '类型',
                    allowBlank: false,
                    xtype: 'dictCombobox',
                    dictType: 'pms_character_type',
                    bind: {
                        value: '{rec.elementsType}'
                    }
                },
                {
                    fieldLabel: '角色名称',
                    allowBlank: false,
                    bind: {
                        value: '{rec.elementName}'
                    }
                },
                {
                    xtype: 'textareafield',
                    height: 150,
                    fieldLabel: '个性特点',
                    allowBlank: false,
                    bind: {
                        value: '{rec.descriptionOne}'
                    }
                }
            ]
        }
    ]
});