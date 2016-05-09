/**
 * 场表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.field.view.FieldGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.field.controller.FieldGridController',
        'kalix.pms.field.store.FieldStore'
    ],
    alias: 'widget.fieldGrid',
    xtype: 'fieldGridPanel',
    autoLoad: false,
    controller: {
        type: 'fieldGridController',
        storeId: 'fieldStore',
        cfgForm: 'kalix.pms.field.view.FieldWindow',
        cfgViewForm: 'kalix.pms.field.view.FieldViewWindow',
        cfgModel: 'kalix.pms.field.model.FieldModel'
    },
    store: {
        type: 'fieldStore'
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
                text: '集名称',
                dataIndex: 'episodeId',
                hidden: true
            },
            {
                text: '场名称',
                dataIndex: 'fieldName'
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
