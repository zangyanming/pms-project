/**
 * 项目选择下拉comboBox
 * @author zangyanming
 */
Ext.define('kalix.pms.episode.component.EpisodeComboBox', {
    extend: 'kalix.view.components.common.BaseComboBox',
    requires: [
        'kalix.pms.episode.store.EpisodeStore'
    ],
    alias: 'widget.episodeComboBox',
    xtype: 'episodeComboBox',
    valueField: 'id',
    displayField: 'episodeName',
    queryParam: 'episodeName',
    modelField:'episodeId',
    store: {
        type: 'episodeStore'
    }
});
