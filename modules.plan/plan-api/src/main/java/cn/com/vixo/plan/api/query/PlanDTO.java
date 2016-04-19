package cn.com.vixo.plan.api.query;

import cn.com.rexen.core.api.web.model.BaseDTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Transient;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by sunlf on 2015/11/5.
 */
public class PlanDTO extends BaseDTO {
    /**
     * @describe 项目计划名称
     */
    private String planTaskName;
    /**
     * @describe 项目计划工期
     */
    private int planTaskTime;
    /**
     * @describe 项目计划开始时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date planBeginTime;
    /**
     * @describe 项目计划结束时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date planEndTime;
    /**
     * @describe 项目负责人
     */
    private String principal;
    /**
     * @describe 项目里程碑
     */
    private int milestone;
    /**
     * @describe 父项目计划id
     */
    private long parentProjectPlanId;
    @Transient
    private String parentProjectPlanName;
    /**
     * @describe 项目主键id
     */
    private long projectId;
    @Transient
    private String projectName;
    private boolean leaf; //是否是叶子节点
    private String text;
    private List<PlanDTO> children=new ArrayList<PlanDTO>();

    public String getPlanTaskName() {
        return planTaskName;
    }

    public void setPlanTaskName(String planTaskName) {
        this.planTaskName = planTaskName;
    }

    public int getPlanTaskTime() {
        return planTaskTime;
    }

    public void setPlanTaskTime(int planTaskTime) {
        this.planTaskTime = planTaskTime;
    }

    public Date getPlanBeginTime() {
        return planBeginTime;
    }

    public void setPlanBeginTime(Date planBeginTime) {
        this.planBeginTime = planBeginTime;
    }

    public Date getPlanEndTime() {
        return planEndTime;
    }

    public void setPlanEndTime(Date planEndTime) {
        this.planEndTime = planEndTime;
    }

    public String getPrincipal() {
        return principal;
    }

    public void setPrincipal(String principal) {
        this.principal = principal;
    }

    public int getMilestone() {
        return milestone;
    }

    public void setMilestone(int milestone) {
        this.milestone = milestone;
    }

    public long getParentProjectPlanId() {
        return parentProjectPlanId;
    }

    public void setParentProjectPlanId(long parentProjectPlanId) {
        this.parentProjectPlanId = parentProjectPlanId;
    }

    public String getParentProjectPlanName() {
        return parentProjectPlanName;
    }

    public void setParentProjectPlanName(String parentProjectPlanName) {
        this.parentProjectPlanName = parentProjectPlanName;
    }

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public boolean isLeaf() {
        return leaf;
    }

    public void setLeaf(boolean leaf) {
        this.leaf = leaf;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<PlanDTO> getChildren() {
        return children;
    }

    public void setChildren(List<PlanDTO> children) {
        this.children = children;
    }
}