/**
 * 集模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.episode.model.EpisodeModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'projectId'
        }, {
            name: 'episodeName',
            type: 'string'
        }, {
            name: 'description',
            type: 'string'
        }, {
            name: 'homePage',
            type: 'string'
        }, {
            name: 'identifier',
            type: 'string'
        }, {
            name: 'status',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'movieElementsTypeId',
            defaultValue:6
        }, {
            name: 'startTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'endTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }
    ],
    //todo 在此修改模型验证提示信息
    validators: {
        projectId: [{
            type: 'presence',
            message: '项目名称不能为空'
        }],
        episodeName: [{
            type: 'presence',
            message: '集名称不能为空'
        }],
        identifier: [{
            type: 'presence',
            message: '标识不能为空'
        }]
    }
});
