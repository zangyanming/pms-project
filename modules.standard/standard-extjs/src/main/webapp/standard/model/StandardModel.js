/**
 * 项目规范模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.pms.standard.model.StandardModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
    	{
    	name: 'projectId',
    	type: 'string'
    	},	{
    	name: 'fileName',
    	type: 'string'
    	},	{
    	name: 'filePath',
    	type: 'string'
    	},	{
    	name: 'description',
    	type: 'string'
    	},	{
    	name: 'fileSize',
    	type: 'string'
    	},	{
    	name: 'fileType',
    	type: 'string'
    	}
    ],
    //todo 在此修改模型验证提示信息
    	validators: {
    		projectId:[{
    			type: 'presence',
    			message: '项目主键id不能为空'
    		}],
    		fileName:[{
    			type: 'presence',
    			message: '文件名不能为空'
    		}],
    		filePath:[{
    			type: 'presence',
    			message: '文件路径不能为空'
    		}]
    	}
});
