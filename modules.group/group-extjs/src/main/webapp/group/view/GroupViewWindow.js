/**
 * 组查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.group.view.GroupViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.group.viewModel.GroupViewModel',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.groupViewWindow',
    viewModel: 'groupViewModel',
    xtype: "groupViewWindow",
    width: 400,
    //todo 在此修改查看字段
    items: [{
        defaults: {readOnly: true},
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '组名称',
                allowBlank: false,
                bind: {
                    value: '{rec.groupName}'
                }
            }
            //,
            //{
            //    fieldLabel: '组管理者',
            //    allowBlank: false,
            //    xtype: 'numberfield',
            //    bind: {
            //        value: '{rec.userId}'
            //    }
            //}
        ]
    }

    ]


});