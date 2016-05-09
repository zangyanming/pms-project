/**
 * 影片元素新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.view.SceneElementWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.element.viewModel.MovieElementViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.dict.component.DictCombobox'
    ],
    alias: 'widget.sceneElementWindow',
    xtype: "sceneElementWindow",
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
                    fieldLabel: '场景标识',
                    allowBlank: false,
                    bind: {
                        value: '{rec.identifier}'
                    }
                },
                {
                    fieldLabel: '拍摄角度',
                    allowBlank: false,
                    xtype: 'dictCombobox',
                    dictType: 'pms_scene_angle',
                    bind: {
                        value: '{rec.angle}'
                    }
                },
                {
                    fieldLabel: '场景名称',
                    allowBlank: false,
                    bind: {
                        value: '{rec.elementName}'
                    }
                },
                {
                    fieldLabel: '地点',
                    allowBlank: false,
                    bind: {
                        value: '{rec.descriptionOne}'
                    }
                }
            ]
        }
    ]
});