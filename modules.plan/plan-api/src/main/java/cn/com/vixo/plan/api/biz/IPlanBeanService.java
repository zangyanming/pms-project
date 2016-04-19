package cn.com.vixo.plan.api.biz;

import cn.com.rexen.core.api.biz.IBizService;
import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.vixo.plan.api.query.PlanDTO;
import cn.com.vixo.plan.entities.PlanBean;

import java.util.List;

/**
 * @类描述：应用服务接口.
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public interface IPlanBeanService extends IBizService<PlanBean> {
    //在此添加新的业务方法
    PlanDTO getAllPlans(String jsonStr);
    JsonStatus  deleteEntity(Long projectId);
}
