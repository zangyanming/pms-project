/**
 * 项目规范模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('vixo.app.standard.viewModel.StandardViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.standardViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看项目规范',
        add_title: '添加项目规范',
        edit_title: '修改项目规范',
        add_image_path: '/kalix/app/standard/resources/images/standard_add.png',
        view_image_path: '/kalix/app/standard/resources/images/standard_view.png',
        edit_image_path: '/kalix/app/standard/resources/images/standard_edit.png',
    }
});