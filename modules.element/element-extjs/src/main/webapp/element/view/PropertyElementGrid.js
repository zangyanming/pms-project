/**
 * 影片元素表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.view.PropertyElementGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.element.controller.MovieElementGridController',
        'kalix.pms.element.store.MovieElementStore'
    ],
    alias: 'widget.propertyElementGrid',
    xtype: 'propertyElementGridPanel',
    autoLoad: false,
    controller: {
        type: 'elementGridController',
        storeId: 'elementStore',
        cfgForm: 'kalix.pms.element.view.PropertyElementWindow',
        cfgViewForm: 'kalix.pms.element.view.PropertyElementViewWindow',
        cfgModel: 'kalix.pms.element.model.MovieElementModel'
    },
    store: {
        type: 'elementStore'
    },
    //todo 在此修改grid显示列
    columns: {
        defaults: {flex: 1, renderer: 'addTooltip'},
        items: [
            {
                hidden: true,
                text: '项目id',
                dataIndex: 'projectId'
            },
            {
                text: '道具名称',
                dataIndex: 'elementName'
            },
            {
                text: '影片元素类型主键id',
                dataIndex: 'movieElementsTypeId',
                hidden: true
            },
            {
                //增删改权限
                xtype: 'securityGridColumnCommon',
                items: [
                    {
                        icon: "resources/images/cog.png",
                        permission: '',
                        tooltip: '生成任务',
                        handler: 'onElementGenerate'
                    },
                    {
                        getClass: function (v, meta, record) {
                            if (record.data.enable) {
                                return "kalix_stop";
                            }
                            return "kalix_start";
                        },
                        getTip: function (value, metadata, record, row, col, store) {
                            if (record.data.enable) {
                                return "启用元素";
                            }
                            return '禁用元素';
                        },
                        permission: '',
                        handler: 'onElementStartStop'
                    },
                    //{
                    //    icon: "resources/images/read.png",
                    //    permission: '',
                    //    tooltip: '查看',
                    //    handler: 'onView'
                    //},
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
                //permission: 'pms:projectModule:movieElementMenu:add',
                permission: '',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
