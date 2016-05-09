/**
 * 场新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.field.controller.FieldWindowController', {
    extend: 'kalix.controller.BaseWindowController',
    alias: 'controller.fieldWindowController',
    onProjectChange:function(){
        var model = this.getView().getViewModel();
        model.get('rec').set('episodeId','');
    },
    onEpisodeExpand: function ( field, eOpts ){
        var projectId = this.getView().items.getAt(0).items.getAt(0).lastValue;
        if(projectId==null){
            projectId=-1;
        }
        var episodeStore = this.getView().items.getAt(0).items.getAt(1).store;
        episodeStore.proxy.extraParams={'jsonStr':'{projectId:'+projectId+'}'};
        episodeStore.load();
    }
});