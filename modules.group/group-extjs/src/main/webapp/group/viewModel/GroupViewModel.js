/**
 * 组模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.group.viewModel.GroupViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.groupViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        url: CONFIG.restRoot + '/camel/rest/groups',
        view_operation: false,
        view_title: '查看组',
        add_title: '添加组',
        edit_title: '修改组',
        add_image_path: '/kalix/app/pms/group/resources/images/group_add.png',
        view_image_path: '/kalix/app/pms/group/resources/images/group_view.png',
        edit_image_path: '/kalix/app/pms/group/resources/images/group_edit.png',
    }
});