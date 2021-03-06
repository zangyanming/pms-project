package cn.com.vixo.user.api.biz;

import cn.com.rexen.core.api.biz.IBizService;
import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.vixo.user.api.query.ProjectUserDTO;
import cn.com.vixo.user.entities.ProjectUserBean;

import java.util.List;

/**
 * @类描述：应用服务接口.
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public interface IProjectUserBeanService extends IBizService<ProjectUserBean> {
    //在此添加新的业务方法
    List<ProjectUserDTO> getAll(int page, int limit, String jsonStr);
    ProjectUserDTO getProjectUser(long id);
}
