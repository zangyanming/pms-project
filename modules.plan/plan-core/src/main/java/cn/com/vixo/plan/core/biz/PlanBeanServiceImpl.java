package cn.com.vixo.plan.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.ShiroGenericBizServiceImpl;
import cn.com.rexen.core.util.BeanUtil;
import cn.com.rexen.core.util.SerializeUtil;
import cn.com.rexen.core.util.StringUtils;
import cn.com.vixo.plan.api.biz.IPlanBeanService;
import cn.com.vixo.plan.api.dao.IPlanBeanDao;
import cn.com.vixo.plan.api.query.PlanDTO;
import cn.com.vixo.plan.entities.PlanBean;
import cn.com.vixo.project.api.biz.IProjectBeanService;
import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;

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
public class PlanBeanServiceImpl extends ShiroGenericBizServiceImpl<IPlanBeanDao, PlanBean> implements IPlanBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public PlanBeanServiceImpl() {
        super.init(PlanBean.class.getName());
    }

    IProjectBeanService projectBeanService;

    public void setProjectBeanService(IProjectBeanService projectBeanService) {
        this.projectBeanService = projectBeanService;
    }
    public PlanDTO getAllPlans(String jsonStr) {
        String where = " where 1=1";
        if (StringUtils.isNotEmpty(jsonStr)) {
            Map<String, String> jsonMap = SerializeUtil.json2Map(jsonStr);
            for (Map.Entry<String, String> entry : jsonMap.entrySet()) {
                if(entry.getValue() != null && !entry.getValue().equals("")) {
                    where = where + " and " + entry.getKey() + " = " + entry.getValue();
                }
            }
        }
        List<PlanBean> beans = dao.findByNativeSql("select * from pms_plan " + where,PlanBean.class,null);
        //List planBeans = this.dao.find("select a from ProjectBean a");
        List ids= BeanUtil.getBeanFieldValueList(beans,"projectId");
        List values=this.projectBeanService.getFieldValuesByIds(ids.toArray(),"projectName");

        BeanUtil.setBeanListFieldValues(beans,"projectName",values);

        PlanDTO root=new PlanDTO();
        root.setId(-1);
        if(beans!=null&&beans.size()>0){
            List<PlanBean> rootElements = getRootElements(beans);
            if(rootElements!=null&&rootElements.size()>0) {
                for(PlanBean rootElement:rootElements){
                    Mapper mapper = new DozerBeanMapper();
                    PlanDTO planDTO = mapper.map(rootElement, PlanDTO.class);
                    planDTO.setLeaf(rootElement.getIsLeaf() == 0 ? false : true);
                    planDTO.setParentProjectPlanName("根计划");
                    planDTO.setText(rootElement.getPlanTaskName());
                    getChilden(planDTO, beans, mapper);
                    root.getChildren().add(planDTO);
                }
            }
        }
        return root;
    }

    /**
     * 获得所有根节点
     * @param elements
     * @return
     */
    private List<PlanBean> getRootElements(List<PlanBean> elements) {
        List<PlanBean> roots=new ArrayList<PlanBean>();
        for (PlanBean element : elements) {
            if (element.getParentProjectPlanId() == -1) {
                roots.add(element);
            }
        }
        return roots;
    }

    /**
     * 递归函数加载子机构
     *
     * @param root
     * @param elements
     */
    private void getChilden(PlanDTO root, List<PlanBean> elements, Mapper mapper) {
        List<PlanDTO> children = new ArrayList<PlanDTO>();

        for (PlanBean planBean : elements) {
            if (root.getId() != -1 && (root.getId() == planBean.getParentProjectPlanId())) {
                PlanDTO planDTO = mapper.map(planBean, PlanDTO.class);
                planDTO.setLeaf(planBean.getIsLeaf() == 0 ? false : true);
                planDTO.setParentProjectPlanName(root.getParentProjectPlanName());
                planDTO.setText(planBean.getPlanTaskName());
                children.add(planDTO);
                if(planBean.getIsLeaf()==0) {
                    getChilden(planDTO, elements, mapper);
                }
            }
        }
        root.setChildren(children);
    }

    @Override
    public JsonStatus saveEntity(PlanBean entity){
        JsonStatus jsonStatus = super.saveEntity(entity);
        if(jsonStatus.getSuccess()){
            if(entity.getParentProjectPlanId() != -1){
                dao.updateNativeQuery("update pms_plan set isLeaf=0 where id="+entity.getParentProjectPlanId());
            }
        }
        return jsonStatus;
    }

    @Override
    public JsonStatus updateEntity(PlanBean entity) {
        PlanBean plan=(PlanBean)entity;
        JsonStatus jsonStatus = new JsonStatus();
        try {
            if(isUpdate(plan,jsonStatus)) {
                PlanBean oldPlan = dao.get(plan.getId());
                oldPlan.setPlanTaskName(plan.getPlanTaskName());
                oldPlan.setPlanBeginTime(plan.getPlanBeginTime());
                oldPlan.setPlanEndTime(plan.getPlanEndTime());
                oldPlan.setPlanTaskTime(plan.getPlanTaskTime());
                oldPlan.setUpdateBy(this.getShiroService().getCurrentUserName());
                oldPlan.setPrincipal(plan.getPrincipal());
                oldPlan.setMilestone(plan.getMilestone());
                dao.save(oldPlan);
                jsonStatus.setSuccess(true);
                jsonStatus.setMsg("更新成功！");
            }
        } catch (Exception e) {
            e.printStackTrace();
            jsonStatus.setFailure(true);
            jsonStatus.setMsg("更新失败！");
        }
        return jsonStatus;
    }

    public JsonStatus deleteEntity(Long id) {
        JsonStatus jsonStatus = new JsonStatus();
        try {
            List<PlanBean> plans = dao.find("select ob from PlanBean ob where ob.parentProjectPlanId = ?1", id);
            if(plans!=null&&!plans.isEmpty()){
                jsonStatus.setFailure(true);
                jsonStatus.setMsg("该阶段计划存在子计划，不能删除！");
                return jsonStatus;
            }else {
                List<PlanBean> plan = dao.find("select ob from PlanBean ob where ob.id = ?1", id);
                if(plan != null && !plan.isEmpty()) {
                    dao.remove(plan.get(0).getId());
                    jsonStatus.setFailure(true);
                    jsonStatus.setMsg("删除成功！");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            jsonStatus.setFailure(true);
            jsonStatus.setMsg("删除失败！");
        }
        return jsonStatus;
    }
}
