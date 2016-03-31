package cn.com.vixo.group.core.biz;

import cn.com.rexen.admin.entities.UserBean;
import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.rexen.core.api.persistence.PersistentEntity;
import cn.com.rexen.core.util.StringUtils;
import cn.com.vixo.group.api.biz.IGroupBeanService;
import cn.com.vixo.group.api.dao.IGroupBeanDao;
import cn.com.vixo.group.api.dao.IGroupUserBeanDao;
import cn.com.vixo.group.entities.GroupBean;
import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.ShiroGenericBizServiceImpl;
import cn.com.vixo.group.entities.GroupUserBean;

import java.util.ArrayList;
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
    private IGroupUserBeanDao groupUserBeanDao;

    public void setGroupUserBeanDao(IGroupUserBeanDao groupUserBeanDao) {
        this.groupUserBeanDao = groupUserBeanDao;
    }

    public GroupBeanServiceImpl() {
        super.init(GroupBean.class.getName());
    }

    @Override
    public List getUsersByGroupId(long groupId) {
        List<String> userIds = new ArrayList<String>();
        List<GroupUserBean> groupUserBeans = groupUserBeanDao.find("select ob from GroupUserBean ob where ob.groupId = ?1", groupId);
        if (groupUserBeans != null && !groupUserBeans.isEmpty()) {
            for (GroupUserBean groupUserBean : groupUserBeans) {
                if (groupUserBean != null && groupUserBean.getUserId() != 0) {
                    userIds.add(String.valueOf(groupUserBean.getUserId()));
                }
            }
        }
        return userIds;

        //return groupUserBeanDao.findByNativeSql("select a.* from sys_user as a where a.id in (select b.userId from pms_group_user b where b.groupId=" + groupId + ")", UserBean.class, null);
    }

    @Override
    public JsonData getUserAllAndGroupUsers(long groupId) {
        JsonData jsonData = new JsonData();
        List<UserBean> users = groupUserBeanDao.findByNativeSql("select a.* from sys_user as a where a.id not in (select userId from pms_group_user where groupId="+groupId+")", UserBean.class, null);
        List<PersistentEntity> persistentEntities = new ArrayList<PersistentEntity>();
        if (users != null && users.size() > 0) {
            for (UserBean user : users) {
                if (user != null) {
                    persistentEntities.add(user);
                }
            }
        }
        List<UserBean> groupUserBeans = groupUserBeanDao.findByNativeSql("select a.* from sys_user a where a.id in (select du.userId from pms_group_user du where du.groupId=" + groupId + ")", UserBean.class, null);
        if (groupUserBeans != null && groupUserBeans.size() > 0) {
            for (UserBean groupUserBean : groupUserBeans) {
                if (groupUserBean != null) {
                    persistentEntities.add(groupUserBean);
                }
            }
        }
        jsonData.setData(persistentEntities);
        jsonData.setTotalCount((long) persistentEntities.size());
        return jsonData;
    }

    @Override
    public JsonStatus saveGroupUsers(long groupId, String userId) {
        JsonStatus jsonStatus = new JsonStatus();
        try {
            groupUserBeanDao.deleteByGroupId(groupId);
            String userName = super.getShiroService().getCurrentUserName();
            if (StringUtils.isNotEmpty(userId)) {
                String[] userIds = userId.split(",");
                for (String _userId : userIds) {
                    if (StringUtils.isNotEmpty(_userId.trim())) {
                        GroupUserBean groupUserBean = new GroupUserBean();
                        groupUserBean.setCreateBy(userName);
                        groupUserBean.setUpdateBy(userName);
                        groupUserBean.setGroupId((int)groupId);
                        groupUserBean.setUserId(Integer.parseInt(_userId));
                        groupUserBeanDao.save(groupUserBean);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            jsonStatus.setFailure(true);
            jsonStatus.setMsg("保存失败!");
            return jsonStatus;
        }
        jsonStatus.setSuccess(true);
        jsonStatus.setMsg("保存成功!");
        return jsonStatus;
    }

    @Override
    public JsonStatus deleteGroup(long groupId) {
        JsonStatus jsonStatus = new JsonStatus();
        try {
            groupUserBeanDao.deleteByGroupId(groupId);
            deleteEntity(groupId);
        } catch (Exception e) {
            e.printStackTrace();
            jsonStatus.setFailure(true);
            jsonStatus.setMsg("删除失败!");
            return jsonStatus;
        }
        jsonStatus.setSuccess(true);
        jsonStatus.setMsg("删除成功!");
        return jsonStatus;
    }
}
