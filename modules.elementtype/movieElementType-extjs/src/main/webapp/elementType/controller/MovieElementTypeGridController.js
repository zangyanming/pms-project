/**
 * 影片元素类型表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.elementType.controller.MovieElementTypeGridController', {
    extend: 'kalix.controller.BaseGridController',
    alias: 'controller.movieElementTypeGridController',
    onDelete: function (grid, rowIndex, colIndex) {
        var model = grid.getStore().getData().items[rowIndex];
        if(model.data.projectId == '0'){
            Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, '基础数据，无法删除');
            return;
        }else{
            this.callParent(arguments);
        }
    }
});
