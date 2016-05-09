/**
 * 影片元素模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.element.model.MovieElementModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'projectId'
        }, {
            name: 'elementName',
            type: 'string'
        }, {
            name: 'descriptionOne',
            type: 'string'
        }, {
            name: 'descriptionTwo',
            type: 'string'
        }, {
            name: 'angle',
            type: 'string'
        }, {
            name: 'startTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'endTime',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'specialEffect',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'identifier',
            type: 'string'
        }, {
            name: 'movieElementsTypeId'
        }, {
            name: 'elements',
            type: 'string'
        }, {
            name: 'elementsType',
            type: 'string'
        }, {
            name: 'enable',
            type: 'boolean',
            defaultValue:false
        }
    ]
});
