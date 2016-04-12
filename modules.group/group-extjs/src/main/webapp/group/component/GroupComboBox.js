/**
 * 项目选择下拉comboBox
 * @author zangyanming
 */
Ext.define('kalix.pms.group.component.GroupComboBox', {
    extend: 'kalix.view.components.common.BaseComboBox',
    requires: [
        'kalix.pms.group.store.GroupStore'
    ],
    alias: 'widget.groupComboBox',
    xtype: 'groupComboBox',
    valueField: 'id',
    displayField: 'groupName',
    queryParam: 'groupName',
    modelField:'groupId',
    store: {
        type: 'groupStore'
    }
});
