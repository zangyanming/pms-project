package cn.com.vixo.group.api.dao;

import cn.com.rexen.core.api.persistence.IGenericDao;
import cn.com.vixo.group.entities.GroupUserBean;

/**
 * Created by zangyanming on 2016/3/31.
 */
public interface IGroupUserBeanDao extends IGenericDao<GroupUserBean,Long> {
    void deleteByGroupId(long groupId);
}
