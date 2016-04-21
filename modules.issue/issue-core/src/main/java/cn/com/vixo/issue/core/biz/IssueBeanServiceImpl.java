package cn.com.vixo.issue.core.biz;

import cn.com.vixo.issue.api.biz.IIssueBeanService;
import cn.com.vixo.issue.api.dao.IIssueBeanDao;
import cn.com.vixo.issue.entities.IssueBean;
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
public class IssueBeanServiceImpl extends ShiroGenericBizServiceImpl<IIssueBeanDao, IssueBean> implements IIssueBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public IssueBeanServiceImpl() {
        super.init(IssueBean.class.getName());
    }
}
