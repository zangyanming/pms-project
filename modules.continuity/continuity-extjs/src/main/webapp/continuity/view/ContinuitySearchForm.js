/**
 * 镜查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.continuity.view.ContinuitySearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.continuitySearchForm',
    xtype: 'continuitySearchForm',
    storeId: 'continuityStore',
    items: [
    	{
    		xtype: 'textfield',
    		fieldLabel: '场主键',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'fieldId'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '镜名称',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'continuityName'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '描述',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'description'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '镜主页',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'homePage'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '镜标识',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'identifier'
    	},
    	{
    		xtype: 'numberfield',
    		fieldLabel: '状态',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'status'
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
    		fieldLabel: '对话',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'dialogue'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '节奏',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'phythm'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '音乐',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'music'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '乐章',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'movment'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '镜头调度',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'continuityControl'
    	},
    	{
    		xtype: 'numberfield',
    		fieldLabel: '镜头时长',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'timeLength'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '场景类型',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'sceneType'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '镜头摄法（运动、固定）',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'shootTact'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '景深',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'focalLength'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '焦点',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'focus'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '焦距',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'focusDepth'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '光源方向',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'lightDirection'
    	},
    	{
    		xtype: 'datefield',
    		format: 'Y-m-d',
    		fieldLabel: '镜头时间:',
    		labelAlign: 'right',
    		labelWidth: 120,
    		width: 260,
    		name: 'continuityTime:begin:gt'
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
    		name: 'continuityTime:end:lt'
    	},
    	{
    		xtype: 'datefield',
    		format: 'Y-m-d',
    		fieldLabel: '镜头地点:',
    		labelAlign: 'right',
    		labelWidth: 120,
    		width: 260,
    		name: 'continuityPlace:begin:gt'
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
    		name: 'continuityPlace:end:lt'
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
    		xtype: 'textfield',
    		fieldLabel: '镜头其他摄法(角度、晃动等)',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'shootTackOther'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '图片路径',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'imgSrc'
    	}
    ]

});
