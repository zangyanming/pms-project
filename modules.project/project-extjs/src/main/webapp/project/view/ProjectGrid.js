/**
 * 项目表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.project.view.ProjectGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.pms.project.controller.ProjectGridController',
        'kalix.pms.project.store.ProjectStore',
    ],
    alias: 'widget.projectGrid',
    xtype: 'projectGridPanel',
    controller: {
        type: 'projectGridController',
        storeId: 'projectStore',
        cfgForm: 'kalix.pms.project.view.ProjectWindow',
        cfgViewForm: 'kalix.pms.project.view.ProjectViewWindow',
        cfgModel: 'kalix.pms.project.model.ProjectModel'
    },
    store: {
        type: 'projectStore'
    },

    //todo 在此修改grid显示列
    columns: {
        defaults: {flex: 1,renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex: 0,
                align: 'center',
                renderer:this.update
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true,
            },
            	{
            		text: '项目名称',
            		dataIndex: 'projectName'
            	},
            	{
            		text: '项目描述',
            		dataIndex: 'description'
            	},
            	{
            		text: '项目主页',
            		dataIndex: 'homepage'
            	},
            	{
            		text: '项目标识',
            		dataIndex: 'identifier'
            	},
            	{
            		text: '项目状态',
            		dataIndex: 'status'
            	},
            	{
            		text: '投资周期开始',
            		dataIndex: 'startTime',
            		xtype: 'datecolumn',
            		format: 'Y-m-d',		renderer:null
            	},
            	{
            		text: '投资周期结束',
            		dataIndex: 'finishTime',
            		xtype: 'datecolumn',
            		format: 'Y-m-d',		renderer:null
            	},
            	{
            		text: '作品类型',
            		dataIndex: 'productionType'
            	},
            	{
            		text: '影片长度',
            		dataIndex: 'movieTime'
            	},
            	{
            		text: '项目级别',
            		dataIndex: 'projectLevel'
            	},
            	{
            		text: '项目优先级',
            		dataIndex: 'priority'
            	},
            	{
            		text: '项目金额',
            		dataIndex: 'projectMoney'
            	},
            	{
            		text: '人工预算',
            		dataIndex: 'budget'
            	},
            	{
            		text: '项目当前阶段',
            		dataIndex: 'stage'
            	},
            	{
            		text: '项目客户',
            		dataIndex: 'customer'
            	},
            	{
            		text: '项目地域',
            		dataIndex: 'local'
            	},
            	{
            		text: '项目标签',
            		dataIndex: 'projectTag'
            	},
            	{
            		text: '项目背景简介',
            		dataIndex: 'projectIntroduction'
            	},
            	{
            		text: '项目目标',
            		dataIndex: 'projectGoal'
            	},
            	{
            		text: '项目预期结果',
            		dataIndex: 'anticipationResult'
            	},
            	{
            		text: '其他',
            		dataIndex: 'other'
            	},
            	{
            		text: '行业类型',
            		dataIndex: 'industryType'
            	},
            	{
            		text: '投资类型',
            		dataIndex: 'investmentType'
            	},
            	{
            		text: '项目投资方',
            		dataIndex: 'investor'
            	},
            	{
            		text: '项目负责人',
            		dataIndex: 'manager'
            	},
            	{
            		text: '投资需求',
            		dataIndex: 'investmentDemand'
            	},
            	{
            		text: '投资金额',
            		dataIndex: 'investmentMoney'
            	},
            	{
            		text: '项目图片的路径',
            		dataIndex: 'imgSrc'
            	},

            {
                xtype: 'securityGridColumnRUD',
                //todo change permission
                permissions: [
                    'pms:projectModule:pmsMenu:view',
                    'pms:projectModule:pmsMenu:edit',
                    'pms:projectModule:pmsMenu:delete'
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
                permission: 'pms:projectModule:pmsMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    }
});
