/**
 * 影片元素查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.view.MovieElementSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.elementSearchForm',
    xtype: 'elementSearchForm',
    storeId: 'elementStore',
    items: [
    	{
    		xtype: 'textfield',
    		fieldLabel: '项目id',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'projectId'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '影片元素名称',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'elementName'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '描述1（外貌特征）',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'descriptionOne'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '描述2（个性特点）',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'descriptionTwo'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '角度',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'angle'
    	},
    	{
    		xtype: 'datefield',
    		format: 'Y-m-d',
    		fieldLabel: '开始时间:',
    		labelAlign: 'right',
    		labelWidth: 120,
    		width: 260,
    		name: 'startTime:begin:gt'
    	},
    	{
    		xtype: 'displayfield',
    		hideLabel: true,
    		value: '-',
    		margin:'0 5 0 5'
    	},
    	{
    		xtype: 'datefield',
    		format: 'Y-m-d',
    		headLabel: true,
    		labelAlign: 'right',
    		width: 140,
    		name: 'startTime:end:lt'
    	},
    	{
    		xtype: 'datefield',
    		format: 'Y-m-d',
    		fieldLabel: '结束时间:',
    		labelAlign: 'right',
    		labelWidth: 120,
    		width: 260,
    		name: 'endTime:begin:gt'
    	},
    	{
    		xtype: 'displayfield',
    		hideLabel: true,
    		value: '-',
    		margin:'0 5 0 5'
    	},
    	{
    		xtype: 'datefield',
    		format: 'Y-m-d',
    		headLabel: true,
    		labelAlign: 'right',
    		width: 140,
    		name: 'endTime:end:lt'
    	},
    	{
    		xtype: 'numberfield',
    		fieldLabel: '特效',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'specialEffect'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '标识',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'identifier'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '影片元素类型主键id',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'movieElementsTypeId'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '包含子项',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'elements'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '元素类别（主角、配角）',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'elementsType'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '是否启用',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'isEnable'
    	}
    ]

});
