package cn.com.vixo.field.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
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
@Table(name = "pms_field")
public class FieldBean extends PersistentEntity {
    /**
     * @describe 项目id
     */
    @Transient
    private long projectId;
    /**
     * @describe 项目名称
     */
    @Transient
    private String projectName;
    /**
     * @describe 集名称
     */
    private long episodeId;
    /**
     * @describe 集名称
     */
    @Transient
    private String episodeName;
    /**
     * @describe 场名称
     */
    private String fieldName;
    /**
     * @describe 描述
     */
    private String description;
    /**
     * @describe 描述
     */
    private String homePage;
    /**
     * @describe 标识
     */
    private String identifier;
    /**
     * @describe 状态
     */
    private int status;
    /**
     * @describe 影片元素类型主键id
     */
    private long movieElementsTypeId;
    /**
     * @describe 开始时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date startTime;
    /**
     * @describe 结束时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date endTime;
    /**
     * @describe 场景时长
     */
    private int fieldTimeLength;
    /**
     * @describe 短评
     */
    private String paragraph;

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

    public long getEpisodeId() {
        return episodeId;
    }

    public void setEpisodeId(long episodeId) {
        this.episodeId = episodeId;
    }

    public String getEpisodeName() {
        return episodeName;
    }

    public void setEpisodeName(String episodeName) {
        this.episodeName = episodeName;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHomePage() {
        return homePage;
    }

    public void setHomePage(String homePage) {
        this.homePage = homePage;
    }

    public String getIdentifier() {
        return identifier;
    }

    public void setIdentifier(String identifier) {
        this.identifier = identifier;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public long getMovieElementsTypeId() {
        return movieElementsTypeId;
    }

    public void setMovieElementsTypeId(long movieElementsTypeId) {
        this.movieElementsTypeId = movieElementsTypeId;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public int getFieldTimeLength() {
        return fieldTimeLength;
    }

    public void setFieldTimeLength(int fieldTimeLength) {
        this.fieldTimeLength = fieldTimeLength;
    }

    public String getParagraph() {
        return paragraph;
    }

    public void setParagraph(String paragraph) {
        this.paragraph = paragraph;
    }
}
