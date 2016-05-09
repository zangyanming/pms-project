package cn.com.vixo.element.core.biz;

import cn.com.vixo.element.api.biz.IMovieElementBeanService;
import cn.com.vixo.element.api.dao.IMovieElementBeanDao;
import cn.com.vixo.element.entities.MovieElementBean;
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
public class MovieElementBeanServiceImpl extends ShiroGenericBizServiceImpl<IMovieElementBeanDao, MovieElementBean> implements IMovieElementBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public MovieElementBeanServiceImpl() {
        super.init(MovieElementBean.class.getName());
    }
}
