/**
 * 消息表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.continuity.controller.ContinuityWindowController', {
    extend: 'kalix.controller.BaseWindowController',
    alias: 'controller.continuityWindowController',
    onShow: function () {
        //this.getView().lookupViewModel().getData().rec.set('senderid', Ext.util.Cookies.get('currentUserName') || '系统管理员');
        //this.getView().lookupViewModel().getData().rec.dirty = false;
    },
    onProjectChange:function(){
        var model = this.getView().getViewModel();
        model.get('rec').set('episodeId','');
        model.get('rec').set('fieldId','');
    },
    onEpisodeChange:function(){
        var model = this.getView().getViewModel();
        model.get('rec').set('fieldId','');
    },
    onEpisodeExpand: function ( field, eOpts ){
        var projectId = this.getView().items.getAt(0).items.getAt(0).lastValue;
        if(projectId==null){
            projectId=-1;
        }
        var episodeStore = this.getView().items.getAt(0).items.getAt(1).store;
        episodeStore.proxy.extraParams={'jsonStr':'{projectId:'+projectId+'}'};
        episodeStore.load();
    },
    onFieldExpand: function ( field, eOpts ){
        var episodeId = this.getView().items.getAt(0).items.getAt(1).lastValue;
        if(episodeId == null){
            episodeId=-1;
        }
        var fieldStore = this.getView().items.getAt(0).items.getAt(2).store;
        fieldStore.proxy.extraParams={'jsonStr':'{episodeId:'+episodeId+'}'};
        fieldStore.load();
    },
    onElementExpand:function( field, eOpts ){
        var projectId = this.getView().items.getAt(0).items.getAt(0).lastValue;
        if(projectId == null){
            projectId = -1;
        }
        var elementStore = null;
        if(field.elementTypeId == 1) {
            elementStore = this.getView().items.getAt(0).items.getAt(5).store;
        }
        if(field.elementTypeId == 2) {
            elementStore = this.getView().items.getAt(0).items.getAt(6).store;
        }
        if(field.elementTypeId == 3) {
            elementStore = this.getView().items.getAt(0).items.getAt(7).store;
        }

        elementStore.proxy.extraParams={'jsonStr':'{projectId:'+projectId+',movieElementsTypeId:'+field.elementTypeId+'}'};
        elementStore.load();
    },
    onElementChange: function (combo, newValue, oldValue, eOpts) {
        var records = combo.getValueRecords();
        var elementTypeIds = '';
        var elementTypeNames = '';
        records.forEach(function (record) {
            if (elementTypeIds == '') {
                elementTypeIds = record.get('id');
            }
            else {
                elementTypeIds += ':' + record.get('id');
            }
            if (elementTypeNames == '') {
                elementTypeNames = record.get('name');
            }
            else {
                elementTypeNames += ':' + record.get('name');
            }
        });

        if(combo.elementTypeId == 1) {
            combo.lookupViewModel().get('rec').set('characterElementIds', elementTypeIds);
            combo.lookupViewModel().get('rec').set('characterElementNames', elementTypeNames);
        }
        if(combo.elementTypeId == 2) {
            combo.lookupViewModel().get('rec').set('propertyElementIds', elementTypeIds);
            combo.lookupViewModel().get('rec').set('propertyElementNames', elementTypeNames);
        }
        if(combo.elementTypeId == 3) {
            combo.lookupViewModel().get('rec').set('sceneElementIds', elementTypeIds);
            combo.lookupViewModel().get('rec').set('sceneElementNames', elementTypeNames);
        }
    }
});
