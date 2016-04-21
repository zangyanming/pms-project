package cn.com.vixo.issue.web.impl.module;

import cn.com.rexen.core.api.web.IMenu;
import cn.com.rexen.core.api.web.IModule;
import cn.com.vixo.issue.web.impl.Const;

import java.util.List;

/**
 * Created by sunlf on 2015/7/19.
 */
public class IssueModuleImpl implements IModule {
    @Override
    public List<IMenu> getMenus() {
        return null;
    }

    @Override
    public String getApplicationId() {
        return Const.APP_NAME;
    }

    @Override
    public String getId() {
        return "issueModule";
    }

    @Override
    public String getText() {
        return "任务管理";
    }

    @Override
    public String getDescription() {
        return "任务管理";
    }

    @Override
    public String getIcon() {
        return "resources/images/wrench.png";
    }

    @Override
    public String getRouteId() {
        return null;
    }

    @Override
    public int getIndex() {
        return 20;
    }

    @Override
    public String getPermission() {
        return Const.APP_NAME + ":" + getId();
    }

    @Override
    public String getIconCls() {
        return "fa fa-tasks";
    }

    @Override
    public boolean isExpanded() {
        return false;
    }

    @Override
    public boolean isSelectable() {
        return false;
    }
}
