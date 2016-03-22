package cn.com.vixo.project.web.impl.app;

import cn.com.rexen.core.api.web.IApplication;
import cn.com.rexen.core.api.web.IModule;
import cn.com.vixo.project.web.impl.Const;

import java.util.List;

/**
 * Created by zangyanming on 2016/3/22.
 */
public class PmsApplicationImpl implements IApplication {

    @Override
    public List<IModule> getModules() {
        return null;
    }

    @Override
    public String getId() {
        return Const.APP_NAME;
    }

    @Override
    public String getText() {
        return "生产工艺";
    }

    @Override
    public String getDescription() {
        return "生产工艺流程管理";
    }

    @Override
    public String getIcon() {
        return "resources/images/cog.png";
    }

    @Override
    public String getRouteId() {
        return "";
    }

    @Override
    public int getIndex() {
        return 0;
    }

    @Override
    public String getPermission() {
        return Const.APP_NAME;
    }

    @Override
    public String getTitle() {
        return "生产工艺";
    }
}
