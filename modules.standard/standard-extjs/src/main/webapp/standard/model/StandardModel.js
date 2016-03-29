/**
 * 项目规范模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.standard.model.StandardModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'projectId',
            type: 'int'
        },
        {
            name: 'fileName',
            type: 'string'
        },
        {
            name: 'filePath',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'fileSize',
            type: 'string'
        },
        {
            name: 'fileType',
            type: 'string'
        },
        {
            name: 'uploadDate',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }
    ]
});
