/**
 * 项目计划模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.plan.viewModel.PlanViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.planViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看项目计划',
        add_title: '添加项目计划',
        edit_title: '修改项目计划',
        add_image_path: '/kalix/app/pms/plan/resources/images/plan_add.png',
        view_image_path: '/kalix/app/pms/plan/resources/images/plan_view.png',
        edit_image_path: '/kalix/app/pms/plan/resources/images/plan_edit.png',
    }
});