package cn.com.vixo.standard.core.biz;

import cn.com.vixo.standard.api.biz.IStandardBeanService;
import cn.com.vixo.standard.api.dao.IStandardBeanDao;
import cn.com.vixo.standard.entities.StandardBean;
import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.ShiroGenericBizServiceImpl;
import java.util.List;

/**
 * @类描述： 
 * @创建人：  
 * @创建时间： 
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class StandardBeanServiceImpl extends ShiroGenericBizServiceImpl<IStandardBeanDao, StandardBean> implements IStandardBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public StandardBeanServiceImpl() {
        super.init(StandardBean.class.getName());
    }
}
