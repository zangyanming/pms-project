/**
 * 项目成员模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.user.viewModel.ProjectUserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看项目成员',
        add_title: '添加项目成员',
        edit_title: '修改项目成员',
        add_image_path: '/kalix/app/pms/user/resources/images/user_add.png',
        view_image_path: '/kalix/app/pms/user/resources/images/user_view.png',
        edit_image_path: '/kalix/app/pms/user/resources/images/user_edit.png'
    }
});