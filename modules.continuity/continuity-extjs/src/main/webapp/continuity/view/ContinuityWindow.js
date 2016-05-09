/**
 * 镜新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.continuity.view.ContinuityWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.continuity.viewModel.ContinuityViewModel',
        //'kalix.controller.BaseWindowController',
        'kalix.pms.continuity.controller.ContinuityWindowController',
        'kalix.pms.episode.component.EpisodeComboBox',
        'kalix.pms.field.component.FieldComboBox',
        'kalix.pms.element.component.ElementTagField'
    ],
    alias: 'widget.continuityWindow',
    viewModel: 'continuityViewModel',
    controller: {
        type: 'continuityWindowController',
        storeId: 'continuityStore'
    },
    xtype: "continuityWindow",
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
                        expand:'onEpisodeExpand',
                        change:'onEpisodeChange'
                    },
                    bind: {
                        value: '{rec.episodeId}'
                    }
                },
                {
                    xtype: 'fieldComboBox',
                    fieldLabel: '场名称',
                    name: 'fieldId',
                    allowBlank: false,
                    editable:false,
                    listeners:{
                        expand:'onFieldExpand'
                    },
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
                },
                {
                    fieldLabel: '角色',
                    xtype: 'elementTagField',
                    elementTypeId:1,
                    listeners: {
                        expand: 'onElementExpand',
                        change: 'onElementChange'
                    },
                    bind: {
                        value: '{rec.characterElementNames}'
                    }
                },
                {
                    fieldLabel: '道具',
                    xtype: 'elementTagField',
                    elementTypeId:2,
                    projectId:0,
                    listeners: {
                        expand: 'onElementExpand',
                        change: 'onElementChange'
                    },
                    bind: {
                        value: '{rec.propertyElementNames}'
                    }
                },
                {
                    fieldLabel: '场景',
                    xtype: 'elementTagField',
                    elementTypeId:3,
                    projectId:0,
                    listeners: {
                        expand: 'onElementExpand',
                        change: 'onElementChange'
                    },
                    bind: {
                        value: '{rec.sceneElementNames}'
                    }
                }
                //{
                //    fieldLabel: '角色',
                //    allowBlank: false,
                //    bind: {
                //        value: '{rec.description}'
                //    }
                //},
                //{
                //    fieldLabel: '场景',
                //    allowBlank: false,
                //    bind: {
                //        value: '{rec.description}'
                //    }
                //},
                //{
                //    fieldLabel: '道具',
                //    allowBlank: false,
                //    bind: {
                //        value: '{rec.description}'
                //    }
                //}
            ]
        }
    ]
});