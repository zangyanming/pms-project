/**
 * 影片元素模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.element.viewModel.MovieElementViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.elementViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看影片元素',
        add_title: '添加影片元素',
        edit_title: '修改影片元素',
        add_image_path: '/kalix/app/pms/element/resources/images/element_add.png',
        view_image_path: '/kalix/app/pms/element/resources/images/element_view.png',
        edit_image_path: '/kalix/app/pms/element/resources/images/element_edit.png',
        element_generate:'/kalix/app/pms/element/resources/images/element_generate.png',
        element_forbidden:'/kalix/app/pms/element/resources/images/element_forbidden.png',
        element_start:'/kalix/app/pms/element/resources/images/element_start.png'
    }
});