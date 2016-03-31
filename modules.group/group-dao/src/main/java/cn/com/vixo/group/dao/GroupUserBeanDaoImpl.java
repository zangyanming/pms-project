package cn.com.vixo.group.dao;

import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.vixo.group.api.dao.IGroupBeanDao;
import cn.com.vixo.group.api.dao.IGroupUserBeanDao;
import cn.com.vixo.group.entities.GroupUserBean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by zangyanming on 2016/3/31.
 */
public class GroupUserBeanDaoImpl extends GenericDao<GroupUserBean,Long> implements IGroupUserBeanDao {
    @Override
    @PersistenceContext(unitName = "group-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
    //todo add custom query
    @Override
    public void deleteByGroupId(long groupId) {

    }
}
