/**
 * 镜表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.continuity.view.ContinuityGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.continuity.controller.ContinuityGridController',
        'kalix.pms.continuity.store.ContinuityStore'
    ],
    alias: 'widget.continuityGrid',
    xtype: 'continuityGridPanel',
    autoLoad: false,
    controller: {
        type: 'continuityGridController',
        storeId: 'continuityStore',
        cfgForm: 'kalix.pms.continuity.view.ContinuityWindow',
        cfgViewForm: 'kalix.pms.continuity.view.ContinuityViewWindow',
        cfgModel: 'kalix.pms.continuity.model.ContinuityModel'
    },
    store: {
        type: 'continuityStore'
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
                text: '集主键',
                dataIndex: 'episodeId',
                hidden: true
            },
            {
                text: '场主键',
                dataIndex: 'fieldId',
                hidden: true
            },
            {
                text: '镜名称',
                dataIndex: 'continuityName'
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
