/**
 * 组查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.group.view.GroupSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.groupSearchForm',
    xtype: 'groupSearchForm',
    storeId: 'groupStore',
    items: [
    	{
    		xtype: 'textfield',
    		fieldLabel: '组名称',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'groupName'
    	}
    ]

});
