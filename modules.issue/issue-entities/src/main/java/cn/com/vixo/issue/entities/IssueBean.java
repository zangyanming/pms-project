package cn.com.vixo.issue.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
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
@Table(name = "pms_issue")
public class IssueBean extends PersistentEntity {
    /**
     * @describe 项目主键id
     */
    private long projectId;
    /**
     * @describe 集主键id
     */
    private long episodeId;
    /**
     * @describe 场主键id
     */
    private long fieldId;
    /**
     * @describe 镜主键id
     */
    private long continuityId;
    /**
     * @describe 难度主键id
     */
    private long difficultyId;
    /**
     * @describe 任务类别
     */
    private long mxId;
    /**
     * @describe 任务名称
     */
    private String subject;
    /**
     * @describe 任务描述
     */
    private String description;
    /**
     * @describe 种类
     */
    private long categoryId;
    /**
     * @describe 状态主键id
     */
    private long statusId;
    /**
     * @describe 指派给id
     */
    private long assignedToId;
    /**
     * @describe 优先级id
     */
    private long priorityId;
    /**
     * @describe 修订版本id
     */
    private long fixedVersionId;
    /**
     * @describe 锁定版本
     */
    private long lockVersion;
    /**
     * @describe 开始时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date startDate;
    /**
     * @describe 预计结束时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date dueDate;
    /**
     * @describe 实际结束时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date endDate;
    /**
     * @describe 完成百分比
     */
    private int doneRadio;
    /**
     * @describe 预计耗时
     */
    private float estimatedHours;
    /**
     * @describe 任务标识
     */
    private long issueIdentifier;
    /**
     * @describe 是否开启
     */
    private boolean enable;
    /**
     * @describe 影片元素类型主键id
     */
    private long dataTypeId;
    /**
     * @describe 影片元素主键id
     */
    private long dataId;
    /**
     * @describe 父任务id
     */
    private long parentIssueId;
    /**
     * @describe 动画时长
     */
    private int cartoonTime;
    /**
     * @describe 审核人
     */
    private long examiner;
    /**
     * @describe 工作流节点序号
     */
    private long workflowNodeOrderId;
    /**
     * @describe 是否可以开始
     */
    private boolean canStart;
    /**
     * @describe 工艺流id
     */
    private long craftId;
    /**
     * @describe 输出边任务id
     */
    private long outEdgeMxId;

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public long getEpisodeId() {
        return episodeId;
    }

    public void setEpisodeId(long episodeId) {
        this.episodeId = episodeId;
    }

    public long getFieldId() {
        return fieldId;
    }

    public void setFieldId(long fieldId) {
        this.fieldId = fieldId;
    }

    public long getContinuityId() {
        return continuityId;
    }

    public void setContinuityId(long continuityId) {
        this.continuityId = continuityId;
    }

    public long getDifficultyId() {
        return difficultyId;
    }

    public void setDifficultyId(long difficultyId) {
        this.difficultyId = difficultyId;
    }

    public long getMxId() {
        return mxId;
    }

    public void setMxId(long mxId) {
        this.mxId = mxId;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    public long getStatusId() {
        return statusId;
    }

    public void setStatusId(long statusId) {
        this.statusId = statusId;
    }

    public long getAssignedToId() {
        return assignedToId;
    }

    public void setAssignedToId(long assignedToId) {
        this.assignedToId = assignedToId;
    }

    public long getPriorityId() {
        return priorityId;
    }

    public void setPriorityId(long priorityId) {
        this.priorityId = priorityId;
    }

    public long getFixedVersionId() {
        return fixedVersionId;
    }

    public void setFixedVersionId(long fixedVersionId) {
        this.fixedVersionId = fixedVersionId;
    }

    public long getLockVersion() {
        return lockVersion;
    }

    public void setLockVersion(long lockVersion) {
        this.lockVersion = lockVersion;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public int getDoneRadio() {
        return doneRadio;
    }

    public void setDoneRadio(int doneRadio) {
        this.doneRadio = doneRadio;
    }

    public float getEstimatedHours() {
        return estimatedHours;
    }

    public void setEstimatedHours(float estimatedHours) {
        this.estimatedHours = estimatedHours;
    }

    public long getIssueIdentifier() {
        return issueIdentifier;
    }

    public void setIssueIdentifier(long issueIdentifier) {
        this.issueIdentifier = issueIdentifier;
    }

    public boolean isEnable() {
        return enable;
    }

    public void setEnable(boolean enable) {
        this.enable = enable;
    }

    public long getDataTypeId() {
        return dataTypeId;
    }

    public void setDataTypeId(long dataTypeId) {
        this.dataTypeId = dataTypeId;
    }

    public long getDataId() {
        return dataId;
    }

    public void setDataId(long dataId) {
        this.dataId = dataId;
    }

    public long getParentIssueId() {
        return parentIssueId;
    }

    public void setParentIssueId(long parentIssueId) {
        this.parentIssueId = parentIssueId;
    }

    public int getCartoonTime() {
        return cartoonTime;
    }

    public void setCartoonTime(int cartoonTime) {
        this.cartoonTime = cartoonTime;
    }

    public long getExaminer() {
        return examiner;
    }

    public void setExaminer(long examiner) {
        this.examiner = examiner;
    }

    public long getWorkflowNodeOrderId() {
        return workflowNodeOrderId;
    }

    public void setWorkflowNodeOrderId(long workflowNodeOrderId) {
        this.workflowNodeOrderId = workflowNodeOrderId;
    }

    public boolean isCanStart() {
        return canStart;
    }

    public void setCanStart(boolean canStart) {
        this.canStart = canStart;
    }

    public long getCraftId() {
        return craftId;
    }

    public void setCraftId(long craftId) {
        this.craftId = craftId;
    }

    public long getOutEdgeMxId() {
        return outEdgeMxId;
    }

    public void setOutEdgeMxId(long outEdgeMxId) {
        this.outEdgeMxId = outEdgeMxId;
    }
}
