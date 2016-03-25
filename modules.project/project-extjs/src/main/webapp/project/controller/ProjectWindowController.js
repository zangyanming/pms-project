/**
 * 项目form控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.project.controller.ProjectWindowController', {
    extend: 'kalix.controller.BaseWindowController',
    alias: 'controller.projectWindowController',
    //onShow: function () {
    //    //this.getView().lookupViewModel().getData().rec.set('senderid', Ext.util.Cookies.get('currentUserName') || '系统管理员');
    //    //this.getView().lookupViewModel().getData().rec.dirty = false;
    //}
    //,
    onSave:function(){
        var form = this.getView().items.getAt(0).items.getAt(0).items.getAt(1);
        var model=this.getView().lookupViewModel().get('rec');
        var store = kalix.app.getStore(this.storeId);
        var scope={store:store,model:model};
        if(form.down('filefield').lastValue) {
            form.submit({
                url: CONFIG.restRoot + '/camel/rest/upload',
                waitMsg: '正在上传图片...',
                scope:scope,
                success: function (fp, o) {
                    if (o.result.success) {
                        //var model = Ext.create('kalix.pms.project.model.ProjectModel');
                        this.model.set('imgSrc', o.result.attachmentPath);
                        this.store.add(this.model);

                        this.store.sync(
                            {
                                callback: function (batch) {
                                    store.currentPage = 1;
                                    store.load();

                                    var res = Ext.JSON.decode(batch.operations[0].getResponse().responseText);

                                    if (batch.operations[0].success) {
                                        kalix.core.Notify.success(res.msg, CONFIG.ALTER_TITLE_SUCCESS);
                                        form.findParentByType('window').close();
                                    }
                                    else {
                                        Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, res.msg);
                                    }
                                }
                            }
                        );
                    }
                },
                failure: function (fp, o) {
                    Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, o.result.msg);
                }
            });
        }else{
            this.callParent(arguments);
        }
       // this.callParent(arguments);
    }
});
