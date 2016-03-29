/**
 * 项目规范表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.standard.view.StandardGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.standard.controller.StandardGridController',
        'kalix.pms.standard.store.StandardStore',
        'kalix.pms.standard.view.StandardForm'
    ],
    alias: 'widget.standardGrid',
    xtype: 'standardGrid',
    autoLoad: false,
    controller: {
        type: 'standardGridController',
        storeId: 'standardStore'
        // ,
        //cfgForm: 'kalix.pms.standard.view.StandardWindow',
        //cfgViewForm: 'kalix.pms.standard.view.StandardViewWindow',
        //cfgModel: 'kalix.pms.standard.model.StandardModel'
    },
    store: {
        type: 'standardStore'
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
            //{
            //    text: '项目主键id',
            //    dataIndex: 'projectId'
            //},
            {
                text: '文件名',
                dataIndex: 'fileName'
            },
            {
                text: '文件路径',
                dataIndex: 'filePath'
            },
            //{
            //    text: '文件描述',
            //    dataIndex: 'description'
            //},
            {
                //text: '文件大小',
                //dataIndex: 'fileSize'
                text: '大小(MB)',
                xtype:'templatecolumn',
                tpl:'<tpl>{[(values.fileSize/1048576).toFixed(3)]}</tpl>',
                renderer: null
            },
            {
                text: '文件类型',
                dataIndex: 'fileType'
            },
            {
                text: '上传日期',
                dataIndex: 'creationDate',
                xtype: 'datecolumn',
                format: 'Y-m-d H:i'
            },
            {
                xtype: 'securityGridColumnCommon',
                flex:0,
                width:60,
                items: [
                    {
                        icon: "resources/images/download.png",
                        permission: 'pms:projectModule:standardMenu:delete',
                        tooltip: '下载',
                        handler: 'onDownload'
                    },
                    {
                        icon: "resources/images/delete.png",
                        permission: 'pms:projectModule:standardMenu:delete',
                        tooltip: '删除',
                        handler: 'onDelete'
                    }
                ]
            }
        ]
    },
    tbar: {
        xtype: 'securityToolbar',
        height:35,
        padding:'5 0 0 10',
        verifyItems: [
            {
                xtype: 'standardForm',
                filebutonIcon: CONFIG.restRoot + '/app/pms/standard/resources/images/standard_add.png',
                permission: 'pms:projectModule:standardMenu:add'
            }
        ]
    }
});
