package cn.com.vixo.project.dao;

import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.vixo.project.api.dao.IProjectBeanDao;
import cn.com.vixo.project.entities.ProjectBean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class ProjectBeanDaoImpl extends GenericDao<ProjectBean, Long> implements IProjectBeanDao {
    @Override
    @PersistenceContext(unitName = "project-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
    //todo add custom query

}
