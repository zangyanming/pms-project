package cn.com.vixo.standard.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

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
@Table(name = "pms_standard")
public class StandardBean extends PersistentEntity {
    /**
     * @describe 项目主键id
     */
    private int projectId;
    /**
     * @describe couchdb中的附件id
     */
    private String fileId;
    /**
     * @describe couchdb中的附件版本号
     */
    private String fileRev;
    /**
     * @describe 文件名
     */
    private String fileName;
    /**
     * @describe 文件类型
     */
    private String fileType;
    /**
     * @describe 文件大小
     */
    private String fileSize;
    /**
     * @describe 文件路径
     */
    private String filePath;
    /**
     * @describe 文件描述
     */
    private String description;

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    public String getFileId() {
        return fileId;
    }

    public void setFileId(String fileId) {
        this.fileId = fileId;
    }

    public String getFileRev() {
        return fileRev;
    }

    public void setFileRev(String fileRev) {
        this.fileRev = fileRev;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public String getFileSize() {
        return fileSize;
    }

    public void setFileSize(String fileSize) {
        this.fileSize = fileSize;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
