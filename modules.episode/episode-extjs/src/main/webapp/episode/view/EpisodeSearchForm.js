/**
 * 集查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.episode.view.EpisodeSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.episodeSearchForm',
    xtype: 'episodeSearchForm',
    storeId: 'episodeStore',
    items: [
    	{
    		xtype: 'textfield',
    		fieldLabel: '项目名称',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'projectId'
    	},
    	{
    		xtype: 'textfield',
    		fieldLabel: '集名称',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'episodeName'
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
    		fieldLabel: '主页',
    		labelAlign: 'right',
    		labelWidth: 60,
    		width: 200,
    		name: 'homePage'
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
    	}
    ]

});
