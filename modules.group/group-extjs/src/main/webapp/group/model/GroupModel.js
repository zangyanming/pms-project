/**
 * 组模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.group.model.GroupModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'groupName',
            type: 'string'
        },
        {
            name: 'userId',
            type: 'int',
            defaultValue: 0
        }
    ],
    //todo 在此修改模型验证提示信息
    validators: {
        groupName: [{
            type: 'presence',
            message: '组名称不能为空'
        }]
    }
});
