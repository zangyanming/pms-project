/**
 * 任务表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.issue.view.IssueGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.issue.controller.IssueGridController',
        'kalix.pms.issue.store.IssueStore'
    ],
    alias: 'widget.issueGrid',
    xtype: 'issueGridPanel',
    controller: {
        type: 'issueGridController',
        storeId: 'issueStore',
        cfgForm: 'kalix.pms.issue.view.IssueWindow',
        cfgViewForm: 'kalix.pms.issue.view.IssueViewWindow',
        cfgModel: 'kalix.pms.issue.model.IssueModel'
    },
    store: {
        type: 'issueStore'
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
                hidden: true
            },
            {
                text: '项目主键id',
                dataIndex: 'projectId'
            },
            {
                text: '任务标识',
                dataIndex: 'issueIdentifier'
            },
            {
                text: '审核人',
                dataIndex: 'examiner'
            },
            {
                text: '任务类别',
                dataIndex: 'mxId'
            },
            {
                text: '流程节点',
                dataIndex: 'workflowNodeOrderId'
            },
            {
                text: '状态主键id',
                dataIndex: 'statusId'
            },
            {
                text: '任务主题',
                dataIndex: 'subject'
            },
            {
                text: '指派给id',
                dataIndex: 'assignedToId'
            },
            {
                text: '开始时间',
                dataIndex: 'startDate',
                xtype: 'datecolumn',
                format: 'Y-m-d', renderer: null
            },
            {
                text: '预计结束时间',
                dataIndex: 'dueDate',
                xtype: 'datecolumn',
                format: 'Y-m-d', renderer: null
            },
            {
                text: '预计耗时',
                dataIndex: 'estimatedHours'
            },
            {
                text: '完成度%',
                dataIndex: 'doneRadio'
            },
            {
                text: '影片元素类型主键id',
                dataIndex: 'dataTypeId'
            },
            {
                text: '影片元素主键id',
                dataIndex: 'dataId'
            },
            {
                xtype: 'securityGridColumnRUD',
                //todo change permission
                permissions: [
                    'pms:issueModule:issueMenu:view',
                    'pms:issueModule:issueMenu:edit',
                    'pms:issueModule:issueMenu:delete'
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
                permission: 'pms:issueModule:issueMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
