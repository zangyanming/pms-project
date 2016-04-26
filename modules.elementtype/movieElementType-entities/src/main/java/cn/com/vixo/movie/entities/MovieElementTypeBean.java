package cn.com.vixo.movie.entities;

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
@Table(name = "pms_movieElementType")
public class MovieElementTypeBean extends PersistentEntity {
    /**
     * @describe 影片元素类别名称
     */
    private String movieElementsType;
    /**
     * @describe 是否为集合
     */
    private int isSet;
    /**
     * @describe 影片元素类别标识
     */
    private String identifier;
    /**
     * @describe 阶段类型
     */
    private String type;
    /**
     * @describe 影片元素类别图标
     */
    private String imageScr;
    /**
     * @describe 项目主键id
     */
    private long projectId;
    @Transient
    private String projectName;

    public String getMovieElementsType() {
        return movieElementsType;
    }

    public void setMovieElementsType(String movieElementsType) {
        this.movieElementsType = movieElementsType;
    }

    public int getIsSet() {
        return isSet;
    }

    public void setIsSet(int isSet) {
        this.isSet = isSet;
    }

    public String getIdentifier() {
        return identifier;
    }

    public void setIdentifier(String identifier) {
        this.identifier = identifier;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImageScr() {
        return imageScr;
    }

    public void setImageScr(String imageScr) {
        this.imageScr = imageScr;
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
}
