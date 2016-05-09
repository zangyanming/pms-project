/**
 * 用户选择下拉comboBox
 *
 * @author chenyanxu <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.component.ElementTagField', {
    extend: 'Ext.form.field.Tag',
    requires: [
        'kalix.pms.element.store.MovieElementStore'
    ],
    alias: 'widget.elementTagField',
    allowBlank: false,
    labelAlign: 'right',
    xtype: 'elementTagField',
    queryMode: 'remote',
    valueField: 'elementName',
    displayField: 'elementName',
    queryParam: 'jsonStr',
    projectId:'',
    elementTypeId:'',
    minChars: 0,
    typeAhead: true,
    filterPickList: true,
    store: {
        type: 'elementStore'
    },
    getParams: function (queryString) {
        var params = {},
            param = this.queryParam;

        if (param) {
            params[param] = '{'
                + this.displayField + ':"' + queryString
                + '",projectId:' + this.projectId
                + ',movieElementsTypeId:' + this.elementTypeId
                +'}';
        }

        return params;
    }
});
