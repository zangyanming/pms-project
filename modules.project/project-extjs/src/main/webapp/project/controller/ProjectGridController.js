/**
 * 项目表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.project.controller.ProjectGridController', {
    extend: 'kalix.controller.BaseGridController',
    requires: [
        'kalix.pms.standard.view.StandardWindow'
    ],
    alias: 'controller.projectGridController',

    onAttachmentManage: function (grid, rowIndex, colIndex) {
        var view = Ext.create('kalix.pms.standard.view.StandardWindow');
        var selModel = grid.getStore().getData().items[rowIndex];
        var vm = view.lookupViewModel();

        vm.set('rec', selModel);
        vm.set('title','项目规范');
        view.show();
        grid.setSelection(selModel);
    }
});
