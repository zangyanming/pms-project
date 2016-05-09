/**
 * 集表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.episode.view.EpisodeGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.episode.controller.EpisodeGridController',
        'kalix.pms.episode.store.EpisodeStore'
    ],
    alias: 'widget.episodeGrid',
    xtype: 'episodeGridPanel',
    autoLoad: false,
    controller: {
        type: 'episodeGridController',
        storeId: 'episodeStore',
        cfgForm: 'kalix.pms.episode.view.EpisodeWindow',
        cfgViewForm: 'kalix.pms.episode.view.EpisodeViewWindow',
        cfgModel: 'kalix.pms.episode.model.EpisodeModel'
    },
    store: {
        type: 'episodeStore'
    },

    //todo 在此修改grid显示列
    columns: {
        defaults: {flex: 1, renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex: 0,
                align: 'center',
                renderer: this.update,
                hidden: true
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true
            },
            {
                text: '项目名称',
                dataIndex: 'projectId',
                hidden: true
            },
            {
                text: '集名称',
                dataIndex: 'episodeName'
            },
            {
                xtype: 'securityGridColumnCommon',
                items: [
                    {
                        icon: "resources/images/cog.png",
                        permission: '',
                        tooltip: '生成任务',
                        handler: 'onElementGenerate'
                    },
                    {
                        //bind: {icon: ''},
                        icon: "resources/images/edit.png",
                        permission: '',
                        tooltip: '编辑',
                        handler: 'onEdit'
                    },
                    {
                        icon: "resources/images/delete.png",
                        permission: '',
                        tooltip: '删除',
                        handler: 'onDelete'
                    }
                ]
            }
        ]
    },
    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                //todo change permission
                permission: '',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
