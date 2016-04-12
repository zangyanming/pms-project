package cn.com.vixo.user.api.query;

import cn.com.rexen.core.api.web.model.QueryDTO;

/**
 * Created by zangyanming on 2016/04/05.
 */
public class ProjectUserDTO extends QueryDTO {
    private long id;
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
    /**
     * @describe 项目名称
     */
    private String projectName;
    /**
     * @describe 组名称
     */
    private String groupName;
    /**
     * @describe 用户名称
     */
    private String userName;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

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

    public boolean isIsDataSupervisor() {
        return isDataSupervisor;
    }

    public void setIsDataSupervisor(boolean dataSupervisor) {
        isDataSupervisor = dataSupervisor;
    }

    public boolean isIsAssignTask() {
        return isAssignTask;
    }

    public void setIsAssignTask(boolean assignTask) {
        isAssignTask = assignTask;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}