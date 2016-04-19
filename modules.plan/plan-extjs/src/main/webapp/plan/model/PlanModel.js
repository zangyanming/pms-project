/**
 * 项目计划模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.plan.model.PlanModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'planTaskName',
            type: 'string'
        }, {
            name: 'planTaskTime',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'planBeginTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'planEndTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'principal',
            type: 'string'
        }, {
            name: 'milestone',
            type: 'int',
            defaultValue: 1
        }, {
            name: 'parentProjectPlanId',
            defaultValue:-1
        }, {
            name: 'projectId'
        }, {
            name: 'isLeaf',
            defaultValue:1
        }, {
            name: 'projectName',
            type: 'string'
        }, {
            name: 'parentProjectPlanName',
            type: 'string'
        }
    ],
    //todo 在此修改模型验证提示信息
    validators: {
        planTaskName: [{
            type: 'presence',
            message: '项目计划名称不能为空'
        }],
        planTaskTime: [{
            type: 'presence',
            message: '项目计划工期不能为空'
        }],
        planBeginTime: [{
            type: 'presence',
            message: '项目计划开始时间不能为空'
        }],
        planEndTime: [{
            type: 'presence',
            message: '项目计划结束时间不能为空'
        }],
        principal: [{
            type: 'presence',
            message: '项目负责人不能为空'
        }],
        projectId: [{
            type: 'presence',
            message: '项目主键id不能为空'
        }]
    }
});
