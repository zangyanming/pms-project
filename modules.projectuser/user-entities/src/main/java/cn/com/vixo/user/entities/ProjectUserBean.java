package cn.com.vixo.user.entities;

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
@Table(name = "pms_project_group_user")
public class ProjectUserBean extends PersistentEntity {
    /**
     * @describe 项目主键id
     */
    private long projectId;
    /**
     * @describe 组主键id
     */
    private long groupId;
    /**
     * @describe 用户主键id
     */
    private long userId;
    /**
     * @describe 是否是主管
     */
    private boolean isDataSupervisor;
    /**
     * @describe 是否分配任务
     */
    private boolean isAssignTask;

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public long getGroupId() {
        return groupId;
    }

    public void setGroupId(long groupId) {
        this.groupId = groupId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public boolean isDataSupervisor() {
        return isDataSupervisor;
    }

    public void setDataSupervisor(boolean dataSupervisor) {
        isDataSupervisor = dataSupervisor;
    }

    public boolean isAssignTask() {
        return isAssignTask;
    }

    public void setAssignTask(boolean assignTask) {
        isAssignTask = assignTask;
    }
}
