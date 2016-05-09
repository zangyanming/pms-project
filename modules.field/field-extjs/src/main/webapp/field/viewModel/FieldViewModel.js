/**
 * 场模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.field.viewModel.FieldViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.fieldViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看场',
        add_title: '添加场',
        edit_title: '修改场',
        add_image_path: '/kalix/app/pms/field/resources/images/field_add.png',
        view_image_path: '/kalix/app/pms/field/resources/images/field_view.png',
        edit_image_path: '/kalix/app/pms/field/resources/images/field_edit.png',
    }
});