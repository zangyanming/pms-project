/**
 * 影片元素表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.controller.MovieElementGridController', {
    extend: 'kalix.controller.BaseGridController',
    alias: 'controller.elementGridController',

    /**
     * 打开添加操作.
     */
    onAdd: function () {
        var westPanel = this.getView().findParentByType().findParentByType().items.items[1];
        var selModel = Ext.getCmp("movieElementTypeGridPanel").getSelectionModel();
        if (selModel.getSelection().length <= 0) {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, '请选择一个元素类型');
            return;
        }
        var selectRow = selModel.getSelection()[0].data;
        var elementTypeId = selectRow.id;
        var projectId = selectRow.projectId;
        var grid = this.getView();
        var viewModel = this.getViewModel();
        var view = Ext.create(this.cfgForm);
        var vm = view.lookupViewModel();

        var cfgModel = Ext.create(this.cfgModel);
        //cfgModel.set('rec.elementTypeId',elementTypeId);
        vm.set('rec', cfgModel);
        cfgModel.set('movieElementsTypeId', elementTypeId);
        cfgModel.set('projectId', projectId);
        vm.set('icon', viewModel.get('add_image_path'));
        vm.set('title', viewModel.get('add_title'));
        view.show();
    },

    //启用、禁用元素
    onElementStartStop: function () {
        var store = arguments[0].getStore();
        var model = arguments[5];
        model.set('enable',!model.get('enable'));
        model.modified = model.data;
        //store.add(model);
        store.sync(
            {
                callback: function (batch) {
                    store.currentPage = 1;
                    store.load();

                    var res = Ext.JSON.decode(batch.operations[0].getResponse().responseText);

                    if (batch.operations[0].success) {
                        kalix.core.Notify.success(res.msg, CONFIG.ALTER_TITLE_SUCCESS);
                    }
                    else {
                        Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, res.msg);
                    }
                }
            }
        );
    },
    //生成任务
    onElementGenerate:function(){
        alert('稍后实现');
    }
});
