package cn.com.vixo.group.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by zangyanming on 2016/3/30.
 */
@Entity
@Table(name = "pms_group_user")
public class GroupUserBean extends PersistentEntity {
    /**
     * @describe 组主键id
     */
    private int groupId;
    /**
     * @describe 用户主键id
     */
    private int userId;

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
