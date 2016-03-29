/**
 * 项目规范新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.standard.view.StandardWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
		'kalix.controller.BaseWindowController',
		'kalix.pms.standard.viewModel.StandardViewModel',
		'kalix.pms.standard.view.StandardGrid',
		'kalix.pms.standard.view.StandardForm'

    ],
    alias: 'widget.standardWindow',
	xtype: "standardWindow",
	viewModel: 'standardViewModel',
	controller: {
        type: 'baseWindowController',
        storeId: 'standardStore'
    },
	layout:'container',
	defualt:{},
	height:550,
    //width: 400,
    //todo 在此修改表单
    items: [
		{
			xtype:'standardGrid'
		}
    ],
	listeners: {
		beforeshow: function () {
			var store = this.items.getAt(0).store;
			var mainId = this.getViewModel().get('rec').id;
			//var projectId = this.getViewModel().get('rec').projectId;

			store.on('load', function (target, records, successful, eOpts) {
				//records.forEach(function(item) {
				//item.set('fileSize', item.get('fileSize') / 1048576);
				//});
			});

			store.proxy.extraParams = {jsonStr: '{projectId:' + mainId +'}'}
			store.load();
		}
	}
});