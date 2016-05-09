/**
 * 影片元素查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.element.view.CharacterElementViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.element.viewModel.MovieElementViewModel',
        'kalix.admin.dict.component.DictCombobox'
    ],
    alias: 'widget.characterElementViewWindow',
    viewModel: 'elementViewModel',
    xtype: "characterElementViewWindow",
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
    }]
});