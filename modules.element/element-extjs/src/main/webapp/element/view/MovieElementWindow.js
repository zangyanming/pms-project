/**
 * 影片元素新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.element.view.MovieElementWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.element.viewModel.MovieElementViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.elementWindow',
    viewModel: 'elementViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'elementStore'
    },
    xtype: "elementWindow",
    width: 400,
    //todo 在此修改表单
    items: [

        {
        xtype: 'baseForm',
        items: [
            	{
            		fieldLabel: '项目id',
            		allowBlank: false,
            		bind: {
            			value: '{rec.projectId}'
            		}
            	},
            	{
            		fieldLabel: '影片元素名称',
            		allowBlank: false,
            		bind: {
            			value: '{rec.elementName}'
            		}
            	},
            	{
            		fieldLabel: '描述1（外貌特征）',
            		allowBlank: false,
            		bind: {
            			value: '{rec.descriptionOne}'
            		}
            	},
            	{
            		fieldLabel: '描述2（个性特点）',
            		allowBlank: false,
            		bind: {
            			value: '{rec.descriptionTwo}'
            		}
            	},
            	{
            		fieldLabel: '角度',
            		allowBlank: false,
            		bind: {
            			value: '{rec.angle}'
            		}
            	},
            	{
            		fieldLabel: '开始时间',
            		allowBlank: false,
            		xtype: 'datefield',
            		format: 'Y-m-d',
            		bind: {
            			value: '{rec.startTime}'
            		}
            	},
            	{
            		fieldLabel: '结束时间',
            		allowBlank: false,
            		xtype: 'datefield',
            		format: 'Y-m-d',
            		bind: {
            			value: '{rec.endTime}'
            		}
            	},
            	{
            		fieldLabel: '特效',
            		allowBlank: false,
            		xtype: 'numberfield',
            		bind: {
            			value: '{rec.specialEffect}'
            		}
            	},
            	{
            		fieldLabel: '标识',
            		allowBlank: false,
            		bind: {
            			value: '{rec.identifier}'
            		}
            	},
            	{
            		fieldLabel: '影片元素类型主键id',
            		allowBlank: false,
            		bind: {
            			value: '{rec.movieElementsTypeId}'
            		}
            	},
            	{
            		fieldLabel: '包含子项',
            		allowBlank: false,
            		bind: {
            			value: '{rec.elements}'
            		}
            	},
            	{
            		fieldLabel: '元素类别（主角、配角）',
            		allowBlank: false,
            		bind: {
            			value: '{rec.elementsType}'
            		}
            	},
            	{
            		fieldLabel: '是否启用',
            		allowBlank: false,
            		bind: {
            			value: '{rec.isEnable}'
            		}
            	}
        ]
        }
    ]
});