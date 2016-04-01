package cn.com.vixo.user.core.biz;

import cn.com.vixo.user.api.biz.IProjectUserBeanService;
import cn.com.vixo.user.api.dao.IProjectUserBeanDao;
import cn.com.vixo.user.entities.ProjectUserBean;
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
public class ProjectUserBeanServiceImpl extends ShiroGenericBizServiceImpl<IProjectUserBeanDao, ProjectUserBean> implements IProjectUserBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public ProjectUserBeanServiceImpl() {
        super.init(ProjectUserBean.class.getName());
    }
}
