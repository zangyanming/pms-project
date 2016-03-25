package cn.com.vixo.project.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;


/**
 * @类描述：项目管理
 * @创建人：zangyanming
 * @创建时间：2016-03-21
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
@Entity
@Table(name = "project_project")
public class ProjectBean extends PersistentEntity {

    /**
     * @describe 项目名称
     * @validator 不能为空
     */
    private String projectName;

    /**
     * @describe 项目标识
     * @validator 不能为空
     */
    private String identifier;

    /**
     * @describe 项目描述
     */
    private String description;

    /**
     * @describe 项目主页
     */
    private String homepage;



    /**
     * @describe 项目状态
     */
    private int status;

    /**
     * @describe 投资周期开始
     * @validator 不能为空
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone ="GMT+8")
    private Date startTime;

    /**
     * @describe 投资周期结束
     * @validator 不能为空
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone ="GMT+8")
    private Date finishTime;

    /**
     * @describe 作品类型
     * @validator 不能为空
     */
    private int productionType;

    /**
     * @describe 影片长度
     * @validator 不能为空
     */
    private int movieTime;

    /**
     * @describe 项目级别
     * @validator 不能为空
     */
    private int projectLevel;

    /**
     * @describe 项目紧急程度
     * @validator 不能为空
     */
    private int priority;

    /**
     * @describe 项目金额
     * @validator 不能为空
     */
    private Float projectMoney;

    /**
     * @describe 人工预算
     * @validator 不能为空
     */
    private Float budget;

    /**
     * @describe 项目当前阶段
     */
    private String stage;

    /**
     * @describe 项目客户
     */
    private String customer;

    /**
     * @describe 项目地域
     */
    private String local;

    /**
     * @describe 项目标签
     */
    private String projectTag;

    /**
     * @describe 项目背景简介
     */
    private String projectIntroduction;

    /**
     * @describe 项目目标
     */
    private String projectGoal;

    /**
     * @describe 项目预期结果
     */
    private String anticipationResult;

    /**
     * @describe 其他
     */
    private String other;

    /**
     * @describe 行业类型
     * @validator 不能为空
     */
    private int industryType;

    /**
     * @describe 投资类型
     * @validator 不能为空
     */
    private int investmentType;

    /**
     * @describe 项目投资方
     */
    private String investor;

    /**
     * @describe 项目负责人
     */
    private String manager;

    /**
     * @describe 投资需求
     */
    private String investmentDemand;

    /**
     * @describe 投资金额
     */
    private Float investmentMoney;

    /**
     * @describe 项目图片的路径
     */
    private String imgSrc;

    /**
     * @describe 结构、画面长度比例
     */
    private String frameRatio;

    /**
     * @describe 结构、画面长度比例
     */
    private String frameRatioWidth;

    /**
     * @describe 结构、画面高度比例
     */
    private String frameRatioHeight;

    /**
     * @describe 分辨率
     */
    private String resolution;

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getIdentifier() {
        return identifier;
    }

    public void setIdentifier(String identifier) {
        this.identifier = identifier;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHomepage() {
        return homepage;
    }

    public void setHomepage(String homepage) {
        this.homepage = homepage;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(Date finishTime) {
        this.finishTime = finishTime;
    }

    public int getProductionType() {
        return productionType;
    }

    public void setProductionType(int productionType) {
        this.productionType = productionType;
    }

    public int getMovieTime() {
        return movieTime;
    }

    public void setMovieTime(int movieTime) {
        this.movieTime = movieTime;
    }

    public int getProjectLevel() {
        return projectLevel;
    }

    public void setProjectLevel(int projectLevel) {
        this.projectLevel = projectLevel;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public Float getProjectMoney() {
        return projectMoney;
    }

    public void setProjectMoney(Float projectMoney) {
        this.projectMoney = projectMoney;
    }

    public Float getBudget() {
        return budget;
    }

    public void setBudget(Float budget) {
        this.budget = budget;
    }

    public String getStage() {
        return stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getProjectTag() {
        return projectTag;
    }

    public void setProjectTag(String projectTag) {
        this.projectTag = projectTag;
    }

    public String getProjectIntroduction() {
        return projectIntroduction;
    }

    public void setProjectIntroduction(String projectIntroduction) {
        this.projectIntroduction = projectIntroduction;
    }

    public String getProjectGoal() {
        return projectGoal;
    }

    public void setProjectGoal(String projectGoal) {
        this.projectGoal = projectGoal;
    }

    public String getAnticipationResult() {
        return anticipationResult;
    }

    public void setAnticipationResult(String anticipationResult) {
        this.anticipationResult = anticipationResult;
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other;
    }

    public int getIndustryType() {
        return industryType;
    }

    public void setIndustryType(int industryType) {
        this.industryType = industryType;
    }

    public int getInvestmentType() {
        return investmentType;
    }

    public void setInvestmentType(int investmentType) {
        this.investmentType = investmentType;
    }

    public String getInvestor() {
        return investor;
    }

    public void setInvestor(String investor) {
        this.investor = investor;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getInvestmentDemand() {
        return investmentDemand;
    }

    public void setInvestmentDemand(String investmentDemand) {
        this.investmentDemand = investmentDemand;
    }

    public Float getInvestmentMoney() {
        return investmentMoney;
    }

    public void setInvestmentMoney(Float investmentMoney) {
        this.investmentMoney = investmentMoney;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public String getFrameRatio() {
        return frameRatio;
    }

    public void setFrameRatio(String frameRatio) {
        this.frameRatio = frameRatio;
    }

    public String getFrameRatioWidth() {
        return frameRatioWidth;
    }

    public void setFrameRatioWidth(String frameRatioWidth) {
        this.frameRatioWidth = frameRatioWidth;
    }

    public String getFrameRatioHeight() {
        return frameRatioHeight;
    }

    public void setFrameRatioHeight(String frameRatioHeight) {
        this.frameRatioHeight = frameRatioHeight;
    }

    public String getResolution() {
        return resolution;
    }

    public void setResolution(String resolution) {
        this.resolution = resolution;
    }
}
