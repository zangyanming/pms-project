/**
 * 项目规范模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.standard.viewModel.StandardViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.standardViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '/kalix/app/pms/standard/resources/images/standard_manage.png',
        title: '项目规范',
        view_operation: true,
        view_title: '',
        add_title: '',
        edit_title: '',
        add_image_path: '/kalix/app/pms/standard/resources/images/standard_add.png',
        view_image_path: '',
        edit_image_path: ''
    }
});