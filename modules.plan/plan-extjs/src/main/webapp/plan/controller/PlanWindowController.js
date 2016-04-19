/**
 * @author zangyanming
 */
Ext.define('kalix.pms.plan.controller.PlanWindowController', {
    extend: 'kalix.controller.BaseWindowController',
    alias: 'controller.planWindowController',
    requires: ['kalix.core.Notify'],
    storeId: '',
    treeStoreId:'',
    xtype:'planWindowController',

    /**
     * 保存/更新操作.
     *
     */
    onSave: function () {
        var viewModel = this.getViewModel();
        var model = viewModel.get('rec');
        var view = this.getView();
        var store = Ext.app.Application.instance.getApplication().getStore(this.storeId);
        var treeStore = Ext.app.Application.instance.getApplication().getStore(this.treeStoreId);

        store.proxy.extraParams = {};
        //treeStore.proxy.extraParams = {};

        if (model.isValid()) {

            if (!model.dirty) {
                Ext.Msg.alert(CONFIG.ALTER_TITLE_INFO, '未修改数据');
                return;
            }

            model.modified = model.data;

            //if (0 == model.id) {
                store.add(model);
            //}

            store.sync(
                {
                    success: function () {
                        view.close();
                        model.dirty = false;
                    },
                    callback: function (batch) {
                        //treeStore.currentPage = 1;
                        treeStore.load();

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
        } else {
            var validation = _.pick(model.getValidation().data, function (value, key, object) {
                return value !== true;
            });

            var formItems = arguments[0].findParentByType('window').items;

            for (var formIndex = 0; formIndex < formItems.length; ++formIndex) {
                var fieldItems = formItems.getAt(formIndex).items;

                for (var fieldIndex = 0; fieldIndex < fieldItems.length; ++fieldIndex) {
                    var fieldItem = fieldItems.getAt(fieldIndex);
                    var bindPath = fieldItem.bind.value.stub.path;
                    var msg = validation[fieldItem.bind.value.stub.path.split('.')[1]];

                    if (msg != undefined) {
                        fieldItem.setActiveError(msg);
                    }
                }
            }
        }
    },
    onClose: function (panel, eOpts) {
        var viewModel = this.getViewModel();
        var model = viewModel.get('rec');

        if (model == null) {
            return;
        }

        if (model.dirty) {
            var store = Ext.app.Application.instance.getApplication().getStore(this.storeId);
            var treeStore = Ext.app.Application.instance.getApplication().getStore(this.treeStoreId);

            Ext.Msg.confirm("警告", "要保存修改吗？", function (button) {
                if (button == "yes") {
                    if (model.isValid()) {
                        model.modified = model.data;

                        if (0 == model.id) {
                            store.add(model);
                        }

                        store.sync(
                            {
                                callback: function (batch) {
                                    treeStore.load();

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
                    } else {
                        Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, "表单验证失败！");
                        model.set(model.modified);
                    }
                }
                else {
                    model.set(model.modified);
                }
            });
        }
    }
});
