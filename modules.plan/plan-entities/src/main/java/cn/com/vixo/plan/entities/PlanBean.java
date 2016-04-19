package cn.com.vixo.plan.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
//todo 修改模型定义
@Entity
@Table(name = "pms_plan")
public class PlanBean extends PersistentEntity {
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
    private long isLeaf; //是否是叶子节点

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

    public long getIsLeaf() {
        return isLeaf;
    }

    public void setIsLeaf(long isLeaf) {
        this.isLeaf = isLeaf;
    }
}
