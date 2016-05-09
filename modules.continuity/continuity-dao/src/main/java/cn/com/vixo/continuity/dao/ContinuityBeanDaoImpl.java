package cn.com.vixo.continuity.dao;

import cn.com.vixo.continuity.api.dao.IContinuityBeanDao;
import cn.com.vixo.continuity.entities.ContinuityBean;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.vixo.continuity.api.query.ContinuityDTO;
import cn.com.rexen.core.api.web.model.QueryDTO;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.metamodel.EntityType;
import javax.persistence.metamodel.SingularAttribute;
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
public class ContinuityBeanDaoImpl extends GenericDao<ContinuityBean, Long> implements IContinuityBeanDao {
    @Override
    @PersistenceContext(unitName = "continuity-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
    //todo add custom query

}
