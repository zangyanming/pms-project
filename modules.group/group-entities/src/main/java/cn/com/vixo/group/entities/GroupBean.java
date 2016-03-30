package cn.com.vixo.group.entities;

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
@Table(name = "pms_group")
public class GroupBean extends PersistentEntity {
    /**
     * @describe 组名称
     */
    private String groupName;

    /**
     * @describe 组管理者
     */
    private int userId;

    public String getGroupName() {
        return this.groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public int getUserId() {
        return this.userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
