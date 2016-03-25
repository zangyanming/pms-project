/**
 * 项目模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.project.model.ProjectModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'projectName',
            type: 'string',
            validators: [{type: 'presence'}]
        }, {
            name: 'identifier',
            type: 'string',
            validators: [{type: 'presence'}]
        }, {
            name: 'status',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'startTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s',
            validators: [{type: 'presence'}]
        }, {
            name: 'finishTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s',
            validators: [{type: 'presence'}]
        }, {
            name: 'productionType',
            type: 'int',
            defaultValue: 0,
            validators: [{type: 'presence'}]
        }, {
            name: 'movieTime',
            type: 'int',
            defaultValue: 0,
            validators: [{type: 'presence'}]
        }, {
            name: 'projectLevel',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'priority',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'projectMoney'
        }, {
            name: 'budget'
        }, {
            name: 'stage',
            type: 'string'
        }, {
            name: 'customer',
            type: 'string'
        }, {
            name: 'local',
            type: 'string'
        }, {
            name: 'projectTag',
            type: 'string'
        }, {
            name: 'projectIntroduction',
            type: 'string'
        }, {
            name: 'projectGoal',
            type: 'string'
        }, {
            name: 'anticipationResult',
            type: 'string'
        }, {
            name: 'other',
            type: 'string'
        }, {
            name: 'industryType',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'investmentType',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'investor',
            type: 'string'
        }, {
            name: 'manager',
            type: 'string'
        }, {
            name: 'investmentDemand',
            type: 'string'
        }, {
            name: 'investmentMoney'
        }, {
            name: 'imgSrc',
            type: 'string'
        },{
            name: 'description',
            type: 'string'
        }, {
            name: 'homepage',
            type: 'string'
        },
        {
            name: 'frameRatio',
            type: 'string'
        },
        {
            name: 'frameRatioWidth',
            type: 'string'
        },
        {
            name: 'frameRatioHeight',
            type: 'string'
        },
        {
            name: 'resolution',
            type: 'string'
        }
    ]
    //,
    //todo 在此修改模型验证提示信息
    //validators: {
    //    projectName: [{
    //        type: 'presence',
    //        message: '项目名称不能为空'
    //    }],
    //    identifier: [{
    //        type: 'presence',
    //        message: '项目标识不能为空'
    //    }],
    //    startTime: [{
    //        type: 'presence',
    //        message: '投资周期开始不能为空'
    //    }],
    //    finishTime: [{
    //        type: 'presence',
    //        message: '投资周期结束不能为空'
    //    }],
    //    productionType: [{
    //        type: 'presence',
    //        message: '作品类型不能为空'
    //    }],
    //    movieTime: [{
    //        type: 'presence',
    //        message: '影片长度不能为空'
    //    }],
    //    projectLevel: [{
    //        type: 'presence',
    //        message: '项目级别不能为空'
    //    }],
    //    priority: [{
    //        type: 'presence',
    //        message: '项目优先级不能为空'
    //    }],
    //    projectMoney: [{
    //        type: 'presence',
    //        message: '项目金额不能为空'
    //    }],
    //    budget: [{
    //        type: 'presence',
    //        message: '人工预算不能为空'
    //    }],
    //    industryType: [{
    //        type: 'presence',
    //        message: '行业类型不能为空'
    //    }],
    //    investmentType: [{
    //        type: 'presence',
    //        message: '投资类型不能为空'
    //    }]
    //}
});
