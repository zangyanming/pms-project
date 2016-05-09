package cn.com.vixo.field.core.biz;

import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.rexen.core.util.BeanUtil;
import cn.com.rexen.core.util.SerializeUtil;
import cn.com.rexen.core.util.StringUtils;
import cn.com.vixo.field.api.biz.IFieldBeanService;
import cn.com.vixo.field.api.dao.IFieldBeanDao;
import cn.com.vixo.field.entities.FieldBean;
import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.ShiroGenericBizServiceImpl;
import java.util.List;
import java.util.Map;

/**
 * @类描述： 
 * @创建人：  
 * @创建时间： 
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class FieldBeanServiceImpl extends ShiroGenericBizServiceImpl<IFieldBeanDao, FieldBean> implements IFieldBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public FieldBeanServiceImpl() {
        super.init(FieldBean.class.getName());
    }

    @Override
    public JsonData getAllEntityByQuery(int page, int limit, String jsonStr){
        return super.getAllEntityByQuery(page,limit,jsonStr);
//        JsonData jsonData = new JsonData();
//        List beans = dao.findbyPage("",page,limit,null);
//
//        jsonData.setTotalCount((long)beans.size());
//        jsonData.setData(beans);
//
//        return jsonData;
    }
}
