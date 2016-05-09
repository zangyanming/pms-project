package cn.com.vixo.continuity.core.biz;

import cn.com.vixo.continuity.api.biz.IContinuityBeanService;
import cn.com.vixo.continuity.api.dao.IContinuityBeanDao;
import cn.com.vixo.continuity.entities.ContinuityBean;
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
public class ContinuityBeanServiceImpl extends ShiroGenericBizServiceImpl<IContinuityBeanDao, ContinuityBean> implements IContinuityBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public ContinuityBeanServiceImpl() {
        super.init(ContinuityBean.class.getName());
    }
}
