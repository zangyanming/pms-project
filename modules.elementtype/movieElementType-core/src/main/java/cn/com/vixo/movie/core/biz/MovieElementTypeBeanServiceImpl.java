package cn.com.vixo.movie.core.biz;

import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.rexen.core.util.BeanUtil;
import cn.com.rexen.core.util.SerializeUtil;
import cn.com.rexen.core.util.StringUtils;
import cn.com.vixo.movie.api.biz.IMovieElementTypeBeanService;
import cn.com.vixo.movie.api.dao.IMovieElementTypeBeanDao;
import cn.com.vixo.movie.entities.MovieElementTypeBean;
import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.ShiroGenericBizServiceImpl;
import cn.com.vixo.project.api.biz.IProjectBeanService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @类描述： 
 * @创建人：  
 * @创建时间： 
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class MovieElementTypeBeanServiceImpl extends ShiroGenericBizServiceImpl<IMovieElementTypeBeanDao, MovieElementTypeBean> implements IMovieElementTypeBeanService {
    public MovieElementTypeBeanServiceImpl() {
        super.init(MovieElementTypeBean.class.getName());
    }

    IProjectBeanService projectBeanService;

    public void setProjectBeanService(IProjectBeanService projectBeanService) {
        this.projectBeanService = projectBeanService;
    }

    @Override
    public JsonData getAllEntityByQuery(int page, int limit, String jsonStr){
        String where = " where 1=1";
        if (StringUtils.isNotEmpty(jsonStr)) {
            Map<String, String> jsonMap = SerializeUtil.json2Map(jsonStr);
            for (Map.Entry<String, String> entry : jsonMap.entrySet()) {
                if(entry.getValue() != null && !entry.getValue().equals("")) {
                    if(entry.getKey().equalsIgnoreCase("movieElementsType")){
                        where = where + " and " + entry.getKey() + " like  '%" + entry.getValue() + "%'";
                    }

                    if(entry.getKey().equalsIgnoreCase("projectId")){
                        where = where + " and (projectId=0 or " + entry.getKey() + " = " + entry.getValue() + ")";
                    }
                }
            }
        }

        //where = where.replace("1=1","projectId=0");

        JsonData jsonData = new JsonData();
        List beans = dao.findByNativeSql("select * from pms_movieElementType" + where,MovieElementTypeBean.class,null);
        List ids= BeanUtil.getBeanFieldValueList(beans,"projectId");
        List values=this.projectBeanService.getFieldValuesByIds(ids.toArray(),"projectName");
        BeanUtil.setBeanListFieldValues(beans,"projectName",values);

        jsonData.setTotalCount((long)beans.size());
        jsonData.setData(beans);

        return jsonData;
    }
}
