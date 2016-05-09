/**
 * 场查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.field.view.FieldViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.field.viewModel.FieldViewModel',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.fieldViewWindow',
    viewModel: 'fieldViewModel',
    xtype: "fieldViewWindow",
    width: 400,
    //todo 在此修改查看字段
    items: [{
        defaults: {readOnly: true},
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '集名称',
                allowBlank: false,
                bind: {
                    value: '{rec.episodeId}'
                }
            },
            {
                fieldLabel: '标识',
                allowBlank: false,
                bind: {
                    value: '{rec.identifier}'
                }
            },
            {
                fieldLabel: '场名称',
                allowBlank: false,
                bind: {
                    value: '{rec.fieldName}'
                }
            }
        ]
    }]
});