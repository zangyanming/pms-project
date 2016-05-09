/**
 * 集首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.episode.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.pms.episode.view.EpisodeGrid',
        'kalix.pms.episode.view.EpisodeSearchForm',
        'kalix.pms.episode.viewModel.EpisodeViewModel'
    ],
    storeId: 'episodeStore',
    viewModel: 'episodeViewModel',
    items: [
        {
            title: '集查询',
            iconCls: 'x-fa fa-search',
            xtype: 'episodeSearchForm'
        }, {
            xtype: 'episodeGridPanel',
            id: 'episodeGridPanel',
            title: '集列表',
            iconCls: 'x-fa fa-search',
            margin: 10
        }
    ]
});
