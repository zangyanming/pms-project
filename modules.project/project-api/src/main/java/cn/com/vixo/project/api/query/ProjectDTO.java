package cn.com.vixo.project.api.query;

import cn.com.rexen.core.api.web.model.QueryDTO;

/**
 * Created by sunlf on 2015/11/5.
 */
public class ProjectDTO extends QueryDTO {
    private String name; //项目名称

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}