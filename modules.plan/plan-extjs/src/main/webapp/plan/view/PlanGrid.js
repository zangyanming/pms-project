/**
 * 项目计划表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.plan.view.PlanGrid', {
    extend: 'Ext.tree.Panel',
    requires: [
        'kalix.pms.plan.viewModel.PlanViewModel',
        'kalix.pms.plan.controller.PlanGridController',
        'kalix.pms.plan.store.PlanStore'
    ],
    alias: 'widget.planGrid',
    xtype: 'planGridPanel',
    //controller: 'planGridController',
    controller: {
        type: 'planGridController',
        storeId: 'planStore',
        treeStoreId:'planTreeStore',
        cfgForm: 'kalix.pms.plan.view.PlanWindow',
        cfgViewForm: 'kalix.pms.plan.view.PlanViewWindow',
        cfgModel: 'kalix.pms.plan.model.PlanModel'
    },
    viewModel: {
        type: 'planViewModel'
    },
    data: {
        planTaskId: null,
        planTaskName: null
    },
    stripeRows: true,
    manageHeight: true,
    rootVisible: false,
    defaults: {
        flex: 1
    },
    //todo 在此修改grid显示列
    columns: {
        defaults: {flex: 1, renderer: 'addTooltip'},
        items: [
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true
            },
            {
                text: '父项目计划名称',
                dataIndex: 'projectTaskName',
                hidden: true
            },
            {
                xtype : 'treecolumn',
                text: '项目计划名称',
                dataIndex: 'planTaskName'
            },
            {
                text: '项目名称',
                dataIndex: 'projectName'
            },
            {
                text: '项目计划工期(天)',
                dataIndex: 'planTaskTime'
            },
            {
                text: '项目计划开始时间',
                dataIndex: 'planBeginTime',
                xtype: 'datecolumn',
                format: 'Y-m-d', renderer: null
            },
            {
                text: '项目计划结束时间',
                dataIndex: 'planEndTime',
                xtype: 'datecolumn',
                format: 'Y-m-d', renderer: null
            },
            {
                text: '项目负责人',
                dataIndex: 'principal'
            },
            {
                text: '项目里程碑',
                dataIndex: 'milestone'
            },
            {
                header: '操作',
                xtype: "actioncolumn",
                items: [{
                    icon: "admin/resources/images/pencil.png",
                    tooltip: '编辑',
                    handler: 'onEdit',
                    permission: 'pms:projectModule:planMenu:edit'
                }, {
                    icon: "admin/resources/images/cancel.png",
                    tooltip: '删除',
                    handler: 'onDelete',
                    permission: 'pms:projectModule:planMenu:delete'
                }]
            }
        ]
    },
    tbar: [
        {
            text: '添加',
            xtype: 'button',
            //todo change permission
            permission: 'pms:projectModule:planMenu:add',
            bind: {icon: '{add_image_path}'},
            handler: 'onAdd'
        }
    ],
    constructor:function(){
        this.callParent(arguments);
        Ext.create('kalix.pms.plan.store.PlanStore');
    }
});
