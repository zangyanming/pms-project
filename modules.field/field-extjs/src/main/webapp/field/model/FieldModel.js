/**
 * 场模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.field.model.FieldModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'projectId'
        }, {
            name: 'episodeId'
        }, {
            name: 'fieldName',
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
            defaultValue:5
        }, {
            name: 'startTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'endTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'fieldTimeLength',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'paragraph',
            type: 'string'
        }
    ],
    //todo 在此修改模型验证提示信息
    validators: {
        episodeId: [{
            type: 'presence',
            message: '集名称不能为空'
        }],
        fieldName: [{
            type: 'presence',
            message: '场名称不能为空'
        }]
    }
});
