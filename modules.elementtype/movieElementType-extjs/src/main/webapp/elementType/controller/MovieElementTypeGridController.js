/**
 * 影片元素类型表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.elementType.controller.MovieElementTypeGridController', {
    extend: 'kalix.controller.BaseGridController',
    requires: [
        'kalix.pms.element.view.CharacterElementGrid',
        'kalix.pms.element.view.PropertyElementGrid',
        'kalix.pms.element.view.SceneElementGrid',
        'kalix.pms.element.view.CustomElementGrid',
        'kalix.pms.continuity.view.ContinuityGrid',
        'kalix.pms.field.view.FieldGrid',
        'kalix.pms.episode.view.EpisodeGrid'
    ],
    alias: 'controller.movieElementTypeGridController',
    onDelete: function (grid, rowIndex, colIndex) {
        var model = grid.getStore().getData().items[rowIndex];
        if (model.data.projectId == '0') {
            Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, '基础数据，无法删除');
            return;
        } else {
            this.callParent(arguments);
        }
    },

    itemclick: function (target, record, item, index, e, eOpts) {
        var jsonObj;
        var elementId = record.data.id;
        var view = this.getView().findParentByType().items.items[2];
        var projectId = this.getView().findParentByType().items.items[0].items.items[0].value;
        view.remove(view.items.getAt(0));
        if (elementId == 1) {
            view.add({xtype: 'characterElementGridPanel'});
        }
        if (elementId == 2) {
            view.add({xtype: 'propertyElementGridPanel'});
        }
        if (elementId == 3) {
            view.add({xtype: 'sceneElementGridPanel'});
        }
        if (elementId == 4) {
            view.add({xtype: 'continuityGridPanel'});
        }
        if (elementId == 5) {
            view.add({xtype: 'fieldGridPanel'});
        }
        if (elementId == 6) {
            view.add({xtype: 'episodeGridPanel'});
        }
        if (elementId > 6) {
            view.add({xtype: 'customElementGridPanel'});
        }
        if(projectId==null) {
            jsonObj = {movieElementsTypeId:elementId};
        }else{
            jsonObj = {projectId:projectId,movieElementsTypeId:elementId};
        }

        var store = view.items.items[0].view.store;

        //store.proxy.extraParams = {'jsonStr': Ext.JSON.encode(jsonObj)};
        store.queryParams={'jsonStr': Ext.JSON.encode(jsonObj)};
        store.load();
    }
});
