package cn.com.vixo.element.entities;

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
@Table(name = "pms_element")
public class MovieElementBean extends PersistentEntity {
    /**
     * @describe 项目id
     */
    private long projectId;
    /**
     * @describe 影片元素名称
     */
    private String elementName;
    /**
     * @describe 描述1（外貌特征）
     */
    private String descriptionOne;
    /**
     * @describe 描述2（个性特点）
     */
    private String descriptionTwo;
    /**
     * @describe 角度
     */
    private String angle;
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
     * @describe 特效
     */
    private int specialEffect;
    /**
     * @describe 标识
     */
    private String identifier;
    /**
     * @describe 影片元素类型主键id
     */
    private long movieElementsTypeId;
    /**
     * @describe 包含子项
     */
    private String elements;
    /**
     * @describe 元素类别（主角、配角）
     */
    private String elementsType;
    /**
     * @describe 是否启用
     */
    private boolean enable;


    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public String getElementName() {
        return elementName;
    }

    public void setElementName(String elementName) {
        this.elementName = elementName;
    }

    public String getDescriptionOne() {
        return descriptionOne;
    }

    public void setDescriptionOne(String descriptionOne) {
        this.descriptionOne = descriptionOne;
    }

    public String getDescriptionTwo() {
        return descriptionTwo;
    }

    public void setDescriptionTwo(String descriptionTwo) {
        this.descriptionTwo = descriptionTwo;
    }

    public String getAngle() {
        return angle;
    }

    public void setAngle(String angle) {
        this.angle = angle;
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

    public int getSpecialEffect() {
        return specialEffect;
    }

    public void setSpecialEffect(int specialEffect) {
        this.specialEffect = specialEffect;
    }

    public String getIdentifier() {
        return identifier;
    }

    public void setIdentifier(String identifier) {
        this.identifier = identifier;
    }

    public long getMovieElementsTypeId() {
        return movieElementsTypeId;
    }

    public void setMovieElementsTypeId(long movieElementsTypeId) {
        this.movieElementsTypeId = movieElementsTypeId;
    }

    public String getElements() {
        return elements;
    }

    public void setElements(String elements) {
        this.elements = elements;
    }

    public String getElementsType() {
        return elementsType;
    }

    public void setElementsType(String elementsType) {
        this.elementsType = elementsType;
    }

    public boolean isEnable() {
        return enable;
    }

    public void setEnable(boolean enable) {
        this.enable = enable;
    }
}
