/**
 * 镜模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.continuity.viewModel.ContinuityViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.continuityViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看镜',
        add_title: '添加镜',
        edit_title: '修改镜',
        add_image_path: '/kalix/app/pms/continuity/resources/images/continuity_add.png',
        view_image_path: '/kalix/app/pms/continuity/resources/images/continuity_view.png',
        edit_image_path: '/kalix/app/pms/continuity/resources/images/continuity_edit.png'
    }
});