/**
 * 项目计划首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.plan.Main', {
    extend: 'Ext.panel.Panel',
    requires:[
        'kalix.pms.plan.view.PlanSearchForm',
        'kalix.pms.plan.view.PlanGrid'
    ],
    storeId:'planStore',
    xtype: 'planPanel',
    items: [
        {
            title: '项目计划查询',
            iconCls: 'x-fa fa-search',
            xtype: 'planSearchForm'
        },
        {
            xtype: 'planGridPanel',
            id: 'planGridPanel',
            title: '项目计划列表',
            iconCls: 'x-fa fa-search',
            margin: 10,
            store: Ext.create('kalix.pms.plan.store.PlanTreeStore')
        }
    ]
});
