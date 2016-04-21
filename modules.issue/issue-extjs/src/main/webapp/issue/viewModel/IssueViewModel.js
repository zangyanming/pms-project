/**
 * 任务模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.issue.viewModel.IssueViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.issueViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看任务',
        add_title: '添加任务',
        edit_title: '修改任务',
        add_image_path: '/kalix/app/pms/issue/resources/images/issue_add.png',
        view_image_path: '/kalix/app/pms/issue/resources/images/issue_view.png',
        edit_image_path: '/kalix/app/pms/issue/resources/images/issue_edit.png'
    }
});