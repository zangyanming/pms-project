/**
 * 镜模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.continuity.model.ContinuityModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'projectId'
        },{
            name: 'episodeId'
        },{
            name: 'fieldId'
        }, {
            name: 'continuityName',
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
            defaultValue: 4
        }, {
            name: 'dialogue',
            type: 'string'
        }, {
            name: 'phythm',
            type: 'string'
        }, {
            name: 'music',
            type: 'string'
        }, {
            name: 'movment',
            type: 'string'
        }, {
            name: 'continuityControl',
            type: 'string'
        }, {
            name: 'timeLength',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'sceneType',
            type: 'string'
        }, {
            name: 'shootTact',
            type: 'string'
        }, {
            name: 'focalLength',
            type: 'string'
        }, {
            name: 'focus',
            type: 'string'
        }, {
            name: 'focusDepth',
            type: 'string'
        }, {
            name: 'lightDirection',
            type: 'string'
        }, {
            name: 'continuityTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'continuityPlace',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'startTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'endTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'shootTackOther',
            type: 'string'
        }, {
            name: 'imgSrc',
            type: 'string'
        }, {
            name: 'characterElementIds',
            type: 'string'
        }, {
            name: 'characterElementNames',
            type: 'string'
        }, {
            name: 'propertyElementIds',
            type: 'string'
        }, {
            name: 'propertyElementNames',
            type: 'string'
        }, {
            name: 'sceneElementIds',
            type: 'string'
        }, {
            name: 'sceneElementNames',
            type: 'string'
        }
    ]
});
