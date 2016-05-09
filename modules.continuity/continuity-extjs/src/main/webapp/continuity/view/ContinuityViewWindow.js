/**
 * 镜查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.continuity.view.ContinuityViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.continuity.viewModel.ContinuityViewModel',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.continuityViewWindow',
    viewModel: 'continuityViewModel',
    xtype: "continuityViewWindow",
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
                fieldLabel: '场名称',
                allowBlank: false,
                bind: {
                    value: '{rec.fieldId}'
                }
            },
            {
                fieldLabel: '镜标识',
                allowBlank: false,
                bind: {
                    value: '{rec.identifier}'
                }
            },
            {
                fieldLabel: '镜头名称',
                allowBlank: false,
                bind: {
                    value: '{rec.continuityName}'
                }
            }
        ]
    }]
});