package cn.com.vixo.user.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.ShiroGenericBizServiceImpl;
import cn.com.rexen.core.util.SerializeUtil;
import cn.com.vixo.user.api.biz.IProjectUserBeanService;
import cn.com.vixo.user.api.dao.IProjectUserBeanDao;
import cn.com.vixo.user.api.query.ProjectUserDTO;
import cn.com.vixo.user.entities.ProjectUserBean;
import com.google.gson.JsonArray;
import org.apache.openjpa.persistence.jest.JSON;

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
public class ProjectUserBeanServiceImpl extends ShiroGenericBizServiceImpl<IProjectUserBeanDao, ProjectUserBean> implements IProjectUserBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public ProjectUserBeanServiceImpl() {
        super.init(ProjectUserBean.class.getName());
    }

    @Override
    public List<ProjectUserDTO> getAll(int page, int limit, String jsonStr) {
        Map<String, String> jsonMap = SerializeUtil.json2Map(jsonStr);
        String sql = "select a.id,a.projectId,(select projectName from pms_project where id=a.projectId) as projectName,a.groupId,(select groupName from pms_group where id=a.groupId) as groupName,a.userId,(select name from sys_user where id=a.userId) as userName,a.isDataSupervisor,a.isAssignTask from pms_project_group_user a where 1=1 ";
        for (Map.Entry<String, String> entry : jsonMap.entrySet()) {
            if(entry.getValue() != null && !entry.getValue().equals("")) {
                sql = sql + " and a." + entry.getKey() + " = " + entry.getValue();
            }
        }
        return dao.findByNativeSql(sql, ProjectUserDTO.class, null);
    }

    @Override
    public ProjectUserDTO getProjectUser(long id) {
        List<ProjectUserDTO> list = dao.findByNativeSql("select a.id,a.projectId,(select projectName from pms_project where id=a.projectId) as projectName,a.groupId,(select groupName from pms_group where id=a.groupId) as groupName,a.userId,(select name from sys_user where id=a.userId) as userName,a.isDataSupervisor,a.isAssignTask from pms_project_group_user a where a.id=" + id, ProjectUserDTO.class, null);
        if (list != null && list.size() > 0) {
            return list.get(0);
        } else
            return null;
    }
}
