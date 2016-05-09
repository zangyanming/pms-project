package cn.com.vixo.episode.core.biz;

import cn.com.vixo.episode.api.biz.IEpisodeBeanService;
import cn.com.vixo.episode.api.dao.IEpisodeBeanDao;
import cn.com.vixo.episode.entities.EpisodeBean;
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
public class EpisodeBeanServiceImpl extends ShiroGenericBizServiceImpl<IEpisodeBeanDao, EpisodeBean> implements IEpisodeBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public EpisodeBeanServiceImpl() {
        super.init(EpisodeBean.class.getName());
    }
}
