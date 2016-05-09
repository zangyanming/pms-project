/**
 * 影片元素查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.element.view.SceneElementViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.element.viewModel.MovieElementViewModel',
        'kalix.admin.dict.component.DictCombobox'
    ],
    alias: 'widget.sceneElementViewWindow',
    viewModel: 'elementViewModel',
    xtype: "sceneElementViewWindow",
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
    }]
});