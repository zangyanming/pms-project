/**
 * 项目选择下拉comboBox
 * @author zangyanming
 */
Ext.define('kalix.pms.project.component.ProjectComboBox', {
    extend: 'kalix.view.components.common.BaseComboBox',
    requires: [
        'kalix.pms.project.store.ProjectStore'
    ],
    alias: 'widget.projectComboBox',
    xtype: 'projectComboBox',
    valueField: 'id',
    displayField: 'projectName',
    queryParam: 'projectName',
    modelField:'projectId',
    store: {
        type: 'projectStore'
    }
});
