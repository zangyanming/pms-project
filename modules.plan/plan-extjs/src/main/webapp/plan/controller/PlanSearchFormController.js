/**
 * @author zangyanming
 */
Ext.define('kalix.pms.plan.controller.PlanSearchFormController', {
    extend: 'kalix.controller.BaseSearchFormController',
    alias: 'controller.planSearchFormController',
    xtype: 'planSearchFormController',
    onSearch: function (target, event) {
        var store = Ext.app.Application.instance.getApplication().getStore('planTreeStore');
        var jsonObj = this.getView().getForm().getFieldValues();
        var jsonObjNew = {};

        for (var jsonKey in jsonObj) {
            if (jsonObj[jsonKey] != '-') {
                jsonObjNew[jsonKey] = jsonObj[jsonKey];
            }
        }

        var jsonStr = Ext.JSON.encode(jsonObjNew);

        store.proxy.extraParams = {'jsonStr': jsonStr};
        //store.proxy.extraParams = {'projectId': jsonObj.projectId};
        //store.currentPage = 1;
        store.load();
    },
    onReset: function () {
        this.getView().getForm().reset();
    }
});