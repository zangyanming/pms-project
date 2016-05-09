/**
 * 集查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.episode.view.EpisodeViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.episode.viewModel.EpisodeViewModel',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.episodeViewWindow',
    viewModel: 'episodeViewModel',
    xtype: "episodeViewWindow",
    width: 400,
    //todo 在此修改查看字段
    items: [{
        defaults: {readOnly: true},
        xtype: 'baseForm',
        items: [
            {
                xtype: 'projectComboBox',
                fieldLabel: '项目名称',
                name: 'projectId',
                allowBlank: false,
                bind: {
                    value: '{rec.projectId}'
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
                fieldLabel: '集名称',
                allowBlank: false,
                bind: {
                    value: '{rec.episodeName}'
                }
            }
        ]
    }]
});