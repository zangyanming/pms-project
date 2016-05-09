/**
 * 影片元素表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.view.MovieElementGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.element.controller.MovieElementGridController',
        'kalix.pms.element.store.MovieElementStore'
    ],
    alias: 'widget.elementGrid',
    xtype: 'elementGridPanel',
    controller: {
        type: 'elementGridController',
        storeId: 'elementStore',
        cfgForm: 'kalix.pms.element.view.MovieElementWindow',
        cfgViewForm: 'kalix.pms.element.view.MovieElementViewWindow',
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
                hidden: true,
            },
            {
                text: '项目id',
                dataIndex: 'projectId'
            },
            {
                text: '影片元素名称',
                dataIndex: 'elementName'
            },
            {
                text: '描述1（外貌特征）',
                dataIndex: 'descriptionOne'
            },
            {
                text: '描述2（个性特点）',
                dataIndex: 'descriptionTwo'
            },
            {
                text: '角度',
                dataIndex: 'angle'
            },
            {
                text: '开始时间',
                dataIndex: 'startTime',
                xtype: 'datecolumn',
                format: 'Y-m-d', renderer: null
            },
            {
                text: '结束时间',
                dataIndex: 'endTime',
                xtype: 'datecolumn',
                format: 'Y-m-d', renderer: null
            },
            {
                text: '特效',
                dataIndex: 'specialEffect'
            },
            {
                text: '标识',
                dataIndex: 'identifier'
            },
            {
                text: '影片元素类型主键id',
                dataIndex: 'movieElementsTypeId'
            },
            {
                text: '包含子项',
                dataIndex: 'elements'
            },
            {
                text: '元素类别（主角、配角）',
                dataIndex: 'elementsType'
            },
            {
                text: '是否启用',
                dataIndex: 'isEnable'
            },
            {
                xtype: 'securityGridColumnRUD',
                //todo change permission
                permissions: [
                    'pms:projectModule:movieElementMenu:view',
                    'pms:projectModule:movieElementMenu:edit',
                    'pms:projectModule:movieElementMenu:delete'
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
                permission: 'pms:projectModule:movieElementMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
