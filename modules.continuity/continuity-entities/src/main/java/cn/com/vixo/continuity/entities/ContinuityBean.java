package cn.com.vixo.continuity.entities;

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
@Table(name = "pms_continuity")
public class ContinuityBean extends PersistentEntity {
    /**
     * @describe 项目名称
     */
    @Transient
    private long projectId;
    /**
     * @describe 项目名称
     */
    @Transient
    private String projectName;
    /**
     * @describe 集主键
     */
    @Transient
    private long episodeId;
    /**
     * @describe 集名称
     */
    @Transient
    private String episodeName;
    /**
     * @describe 场主键
     */
    private long fieldId;
    /**
     * @describe 场名称
     */
    private String fieldName;
    /**
     * @describe 镜名称
     */
    private String continuityName;
    /**
     * @describe 描述
     */
    private String description;
    /**
     * @describe 镜主页
     */
    private String homePage;
    /**
     * @describe 镜标识
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
     * @describe 对话
     */
    private String dialogue;
    /**
     * @describe 节奏
     */
    private String phythm;
    /**
     * @describe 音乐
     */
    private String music;
    /**
     * @describe 乐章
     */
    private String movment;
    /**
     * @describe 镜头调度
     */
    private String continuityControl;
    /**
     * @describe 镜头时长
     */
    private int timeLength;
    /**
     * @describe 场景类型
     */
    private String sceneType;
    /**
     * @describe 镜头摄法（运动、固定）
     */
    private String shootTact;
    /**
     * @describe 景深
     */
    private String focalLength;
    /**
     * @describe 焦点
     */
    private String focus;
    /**
     * @describe 焦距
     */
    private String focusDepth;
    /**
     * @describe 光源方向
     */
    private String lightDirection;
    /**
     * @describe 镜头时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date continuityTime;
    /**
     * @describe 镜头地点
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date continuityPlace;
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
     * @describe 镜头其他摄法(角度、晃动等)
     */
    private String shootTackOther;
    /**
     * @describe 图片路径
     */
    private String imgSrc;
    /**
     * @describe 选择的角色ids
     */
    @Transient
    private String characterElementIds;
    /**
     * @describe 选择的角色
     */
    @Transient
    private String characterElementNames;
    /**
     * @describe 选择的道具ids
     */
    @Transient
    private String propertyElementIds;
    /**
     * @describe 选择的道具
     */
    @Transient
    private String propertyElementNames;
    /**
     * @describe 选择的场景ids
     */
    @Transient
    private String sceneElementIds;
    /**
     * @describe 选择的场景
     */
    @Transient
    private String sceneElementNames;

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

    public long getFieldId() {
        return fieldId;
    }

    public void setFieldId(long fieldId) {
        this.fieldId = fieldId;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public String getContinuityName() {
        return continuityName;
    }

    public void setContinuityName(String continuityName) {
        this.continuityName = continuityName;
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

    public String getDialogue() {
        return dialogue;
    }

    public void setDialogue(String dialogue) {
        this.dialogue = dialogue;
    }

    public String getPhythm() {
        return phythm;
    }

    public void setPhythm(String phythm) {
        this.phythm = phythm;
    }

    public String getMusic() {
        return music;
    }

    public void setMusic(String music) {
        this.music = music;
    }

    public String getMovment() {
        return movment;
    }

    public void setMovment(String movment) {
        this.movment = movment;
    }

    public String getContinuityControl() {
        return continuityControl;
    }

    public void setContinuityControl(String continuityControl) {
        this.continuityControl = continuityControl;
    }

    public int getTimeLength() {
        return timeLength;
    }

    public void setTimeLength(int timeLength) {
        this.timeLength = timeLength;
    }

    public String getSceneType() {
        return sceneType;
    }

    public void setSceneType(String sceneType) {
        this.sceneType = sceneType;
    }

    public String getShootTact() {
        return shootTact;
    }

    public void setShootTact(String shootTact) {
        this.shootTact = shootTact;
    }

    public String getFocalLength() {
        return focalLength;
    }

    public void setFocalLength(String focalLength) {
        this.focalLength = focalLength;
    }

    public String getFocus() {
        return focus;
    }

    public void setFocus(String focus) {
        this.focus = focus;
    }

    public String getFocusDepth() {
        return focusDepth;
    }

    public void setFocusDepth(String focusDepth) {
        this.focusDepth = focusDepth;
    }

    public String getLightDirection() {
        return lightDirection;
    }

    public void setLightDirection(String lightDirection) {
        this.lightDirection = lightDirection;
    }

    public Date getContinuityTime() {
        return continuityTime;
    }

    public void setContinuityTime(Date continuityTime) {
        this.continuityTime = continuityTime;
    }

    public Date getContinuityPlace() {
        return continuityPlace;
    }

    public void setContinuityPlace(Date continuityPlace) {
        this.continuityPlace = continuityPlace;
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

    public String getShootTackOther() {
        return shootTackOther;
    }

    public void setShootTackOther(String shootTackOther) {
        this.shootTackOther = shootTackOther;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public String getCharacterElementIds() {
        return characterElementIds;
    }

    public void setCharacterElementIds(String characterElementIds) {
        this.characterElementIds = characterElementIds;
    }

    public String getCharacterElementNames() {
        return characterElementNames;
    }

    public void setCharacterElementNames(String characterElementNames) {
        this.characterElementNames = characterElementNames;
    }
}
