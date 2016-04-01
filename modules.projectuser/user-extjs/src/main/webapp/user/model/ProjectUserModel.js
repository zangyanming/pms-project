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
        }, {
            name: 'groupId'
        }, {
            name: 'userId'
        }, {
            name: 'isDataSupervisor',
            type: 'boolean'
        }, {
            name: 'isAssignTask',
            type: 'boolean'
        }
    ]
});
