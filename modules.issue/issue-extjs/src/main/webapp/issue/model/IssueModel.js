/**
 * 任务模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.issue.model.IssueModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'projectId',
            validators: [{type: 'presence'}]
        }, {
            name: 'episodeId'
        }, {
            name: 'fieldId'
        }, {
            name: 'continuityId'
        }, {
            name: 'difficultyId'
        }, {
            name: 'mxId'
        }, {
            name: 'subject',
            type: 'string',
            validators: [{type: 'presence'}]
        }, {
            name: 'description',
            type: 'string'
        }, {
            name: 'categoryId'
        }, {
            name: 'statusId'
        }, {
            name: 'assignedToId'
        }, {
            name: 'priorityId'
        }, {
            name: 'fixedVersionId'
        }, {
            name: 'lockVersion'
        }, {
            name: 'startDate',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s',
            validators: [{type: 'presence'}]
        }, {
            name: 'dueDate',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s',
            validators: [{type: 'presence'}]
        }, {
            name: 'endDate',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s'
        }, {
            name: 'doneRadio',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'estimatedHours',
            validators: [{type: 'presence'}]
        }, {
            name: 'issueIdentifier'
        }, {
            name: 'enable',
            type: 'boolean'
        }, {
            name: 'dataTypeId',
            validators: [{type: 'presence'}]
        }, {
            name: 'dataId',
            validators: [{type: 'presence'}]
        }, {
            name: 'parentIssueId'
        }, {
            name: 'cartoonTime',
            type: 'int',
            defaultValue: 0
        }, {
            name: 'examiner'
        }, {
            name: 'workflowNodeOrderId',
            validators: [{type: 'presence'}]
        }, {
            name: 'canStart',
            type: 'boolean'
        }, {
            name: 'craftId'
        }, {
            name: 'outEdgeMxId'
        }
    ]
});
