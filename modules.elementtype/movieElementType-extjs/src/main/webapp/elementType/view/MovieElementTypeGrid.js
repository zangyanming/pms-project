/**
 * 影片元素类型表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.elementType.view.MovieElementTypeGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.elementType.controller.MovieElementTypeGridController',
        'kalix.pms.elementType.store.MovieElementTypeStore'
    ],
    alias: 'widget.movieElementTypeGrid',
    xtype: 'movieElementTypeGridPanel',
    autoLoad: false,
    controller: {
        type: 'movieElementTypeGridController',
        storeId: 'movieElementTypeStore',
        cfgForm: 'kalix.pms.elementType.view.MovieElementTypeWindow',
        cfgViewForm: 'kalix.pms.elementType.view.MovieElementTypeViewWindow',
        cfgModel: 'kalix.pms.elementType.model.MovieElementTypeModel'
    },
    store: {
        type: 'movieElementTypeStore'
    },
    listeners:{itemclick:'itemclick'},
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
                renderer: this.update
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true
            },
            {
                hidden:true,
                text: '项目名称',
                dataIndex: 'projectName'
            },
            {
                text: '元素类别',
                dataIndex: 'movieElementsType'
            },
            {
                xtype: 'securityGridColumnRUD',
                //todo change permission
                permissions: [
                    'pms:projectModule:movieElementTypeMenu:delete'
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
                permission: 'pms:projectModule:movieElementTypeMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
