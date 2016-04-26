/**
 * 影片元素类型模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.elementType.model.MovieElementTypeModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'movieElementsType',
            type: 'string'
        }, {
            name: 'isSet',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'identifier',
            type: 'string',
            defaultValue:'OT'
        }, {
            name: 'type',
            type: 'string'
        }, {
            name: 'imageScr',
            type: 'string'
        }, {
            name: 'projectId'
        }, {
            name: 'projectName'
        }
    ],
    //todo 在此修改模型验证提示信息
    validators: {
        movieElementsType: [{
            type: 'presence',
            message: '影片元素类别名称不能为空'
        }],
        identifier: [{
            type: 'presence',
            message: '影片元素类别标识不能为空'
        }]
    }
});
