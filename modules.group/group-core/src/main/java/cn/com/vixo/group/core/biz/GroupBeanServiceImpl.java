package cn.com.vixo.group.core.biz;

import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.vixo.group.api.biz.IGroupBeanService;
import cn.com.vixo.group.api.dao.IGroupBeanDao;
import cn.com.vixo.group.entities.GroupBean;
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
public class GroupBeanServiceImpl extends ShiroGenericBizServiceImpl<IGroupBeanDao, GroupBean> implements IGroupBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public GroupBeanServiceImpl() {
        super.init(GroupBean.class.getName());
    }

    @Override
    public List getUsersByGroupId(long groupId) {
        return null;
    }

    @Override
    public JsonData getUserAll() {
        return null;
    }

    @Override
    public JsonData getUserAllAndGroupUsers(long groupId) {
        return null;
    }

    @Override
    public JsonStatus saveGroupUsers(long groupId, String userIds) {
        return null;
    }

    @Override
    public JsonStatus deleteGroup(long groupId) {
        return null;
    }
}
