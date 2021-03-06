/**
 * 项目成员模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.user.model.ProjectUserModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'projectId'
        },
        {
            name: 'projectName'
        },
        {
            name: 'groupId'
        },
        {
            name: 'groupName'
        },
        {
            name: 'userId'
        },
        {
            name: 'userName'
        },
        {
            name: 'isDataSupervisor',
            type: 'boolean'
        },
        {
            name: 'isAssignTask',
            type: 'boolean'
        }
    ]
});
