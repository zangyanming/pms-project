/**
 * 项目计划表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.plan.controller.PlanGridController', {
    extend: 'kalix.controller.BaseGridController',
    alias: 'controller.planGridController',
    /**
     * 打开添加操作.
     */
    onAdd: function () {
        var rows = this.getView().getSelectionModel().getSelection();
        //var addFormPanel = Ext.create('kalix.admin.orgNoArea.view.OrgNoAreaAddForm');
        //var model=Ext.create('Ext.data.Model')
        //addFormPanel.lookupViewModel().set('rec',model);

        var model = Ext.create(this.cfgModel);
        if(rows!=null&&rows.length>0){
            if(rows[0]!=null){
                model.set('parentProjectPlanName',rows[0].data.planTaskName);
                model.set('parentProjectPlanId',rows[0].data.id);
                model.set('projectId',rows[0].data.projectId);
            }
        }else{
            model.set('parentProjectPlanName','根计划');
            model.set('parentProjectPlanId',-1);
        }
        model.modified = {};
        model.dirty = false;

        var grid = this.getView();
        var viewModel = this.getViewModel();
        var view = Ext.create(this.cfgForm);
        if(rows!=null&&rows.length>0) {
            if (rows[0] != null) {
                view.items.items[0].items.items[1].readOnly = true;
            }
        }
        var vm = view.lookupViewModel();

        vm.set('rec', model);
        vm.set('icon', viewModel.get('add_image_path'));
        vm.set('title', viewModel.get('add_title'));
        view.show();
    },
    /**
     * 打开编辑操作.
     * @param grid
     * @param rowIndex
     * @param colIndex
     */
    onEdit: function (grid, rowIndex, colIndex) {
        var viewModel = this.getViewModel();
        var selModel = grid.getStore().getData().items[rowIndex];
        var view = Ext.create(this.cfgForm);
        view.items.items[0].items.items[1].readOnly=true;
        var vm = view.lookupViewModel();

        vm.set('rec', selModel);
        vm.set('icon', viewModel.get('edit_image_path'));
        vm.set('title', viewModel.get('edit_title'));
        view.show();
        grid.setSelection(selModel);
    },
    onDelete: function (grid, rowIndex, colIndex) {
        var model = grid.getStore().getData().items[rowIndex];
        var store = Ext.app.Application.instance.getApplication().getStore(this.storeId);
        var treeStore = Ext.app.Application.instance.getApplication().getStore(this.treeStoreId);
        store.proxy.extraParams = {'jsonStr':'{id:'+model.get('id')+'}'};
        store.load({
            scope:{store:store,treeStore:treeStore},
            callback: function (records) {
                var model2 = records[0];
                var scope=this;
                Ext.Msg.confirm("警告", "确定要删除吗？", function (button) {
                    if (button == "yes") {
                        scope.store.proxy.extraParams = {};
                        scope.store.remove(model2);
                        scope.store.sync(
                            {
                                callback: function (batch) {
                                    treeStore.load();
                                    var res = Ext.JSON.decode(batch.operations[0].getResponse().responseText);
                                    kalix.core.Notify.success(res.msg, CONFIG.ALTER_TITLE_SUCCESS);
                                }
                            }
                        );
                    }
                });
            }
        });
    }
});
