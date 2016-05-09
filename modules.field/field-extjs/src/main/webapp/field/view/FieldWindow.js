/**
 * 场新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.field.view.FieldWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.field.viewModel.FieldViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.pms.episode.component.EpisodeComboBox',
        'kalix.pms.field.controller.FieldWindowController'
    ],
    alias: 'widget.fieldWindow',
    viewModel: 'fieldViewModel',
    controller: {
        type: 'fieldWindowController',
        storeId: 'fieldStore'
    },
    xtype: "fieldWindow",
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
                    listeners:{
                        change:'onProjectChange'
                    },
                    bind: {
                        value: '{rec.projectId}'
                    }
                },
                {
                    xtype: 'episodeComboBox',
                    fieldLabel: '集名称',
                    name: 'episodeId',
                    allowBlank: false,
                    editable:false,
                    listeners:{
                        expand:'onEpisodeExpand'
                    },
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
        }
    ]
});