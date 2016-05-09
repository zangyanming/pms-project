/**
 * 项目选择下拉comboBox
 * @author zangyanming
 */
Ext.define('kalix.pms.field.component.FieldComboBox', {
    extend: 'kalix.view.components.common.BaseComboBox',
    requires: [
        'kalix.pms.field.store.FieldStore'
    ],
    alias: 'widget.fieldComboBox',
    xtype: 'fieldComboBox',
    valueField: 'id',
    displayField: 'fieldName',
    queryParam: 'fieldName',
    modelField:'fieldId',
    store: {
        type: 'fieldStore'
    }
});
