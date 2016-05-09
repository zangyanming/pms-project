/**
 * 集新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.episode.view.EpisodeWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.episode.viewModel.EpisodeViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.episodeWindow',
    viewModel: 'episodeViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'episodeStore'
    },
    xtype: "episodeWindow",
    width: 400,
    //todo 在此修改表单
    items: [
        {
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
        }
    ]
});