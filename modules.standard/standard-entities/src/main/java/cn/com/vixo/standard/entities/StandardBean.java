package cn.com.vixo.standard.entities;

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
@Table(name = "Pms_standard")
public class StandardBean extends PersistentEntity {
    	/**
    	*@describe 项目主键id
    	*/
    	private String projectId;
    	public String getProjectId(){
    		return this.projectId;
    	}

    	public void setProjectId(String projectId) {
    		this.projectId = projectId;
    	}

    	/**
    	*@describe 文件名
    	*/
    	private String fileName;
    	public String getFileName(){
    		return this.fileName;
    	}

    	public void setFileName(String fileName) {
    		this.fileName = fileName;
    	}

    	/**
    	*@describe 文件路径
    	*/
    	private String filePath;
    	public String getFilePath(){
    		return this.filePath;
    	}

    	public void setFilePath(String filePath) {
    		this.filePath = filePath;
    	}

    	/**
    	*@describe 文件描述
    	*/
    	private String description;
    	public String getDescription(){
    		return this.description;
    	}

    	public void setDescription(String description) {
    		this.description = description;
    	}

    	/**
    	*@describe 文件大小
    	*/
    	private String fileSize;
    	public String getFileSize(){
    		return this.fileSize;
    	}

    	public void setFileSize(String fileSize) {
    		this.fileSize = fileSize;
    	}

    	/**
    	*@describe 文件类型
    	*/
    	private String fileType;
    	public String getFileType(){
    		return this.fileType;
    	}

    	public void setFileType(String fileType) {
    		this.fileType = fileType;
    	}


}
