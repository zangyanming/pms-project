package cn.com.vixo.group.api.biz;

import cn.com.rexen.core.api.biz.IBizService;
import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.vixo.group.entities.GroupBean;

import java.util.List;

/**
 * @类描述：应用服务接口.
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public interface IGroupBeanService extends IBizService<GroupBean> {
    //在此添加新的业务方法
    List getUsersByGroupId(long groupId);
    JsonData getUserAllAndGroupUsers(long groupId);
    JsonStatus saveGroupUsers(long groupId, String userIds);
    JsonStatus deleteGroup(long groupId);
}
