/**
 * 影片元素类型模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.elementType.viewModel.MovieElementTypeViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.movieElementTypeViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看影片元素类型',
        add_title: '添加影片元素类型',
        edit_title: '修改影片元素类型',
        add_image_path: '/kalix/app/pms/elementType/resources/images/elementType_add.png',
        view_image_path: '/kalix/app/pms/elementType/resources/images/elementType_view.png',
        edit_image_path: '/kalix/app/pms/elementType/resources/images/elementType_edit.png'
    }
});