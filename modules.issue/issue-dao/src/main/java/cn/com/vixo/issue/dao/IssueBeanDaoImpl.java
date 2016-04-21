package cn.com.vixo.issue.dao;

import cn.com.vixo.issue.api.dao.IIssueBeanDao;
import cn.com.vixo.issue.entities.IssueBean;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.vixo.issue.api.query.IssueDTO;
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
public class IssueBeanDaoImpl extends GenericDao<IssueBean, Long> implements IIssueBeanDao {
    @Override
    @PersistenceContext(unitName = "issue-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
    //todo add custom query

}
