package cn.com.vixo.issue.web.impl.menu;

import cn.com.rexen.core.api.web.IMenu;

public class IssueMenuImpl implements IMenu {
    @Override
        public boolean isLeaf() {
            return true;
        }

        @Override
        public String getModuleId() {
            return "issueModule";
        }

        @Override
        public String getParentMenuId() {
            return null;
        }

        @Override
        public String getId() {
            return "issueMenu";
        }

        @Override
        public String getDescription() {
            return "任务信息";
        }

        @Override
        public String getIcon() {
            return null;
        }

        @Override
        public int getIndex() {
            return 10;
        }


        @Override
        public String getIconCls() {
            return "fa fa-list";
        }

        @Override
        public String getText() {
            return "任务信息";
        }

        @Override
        public String getRouteId() {
            return "pms/issue";
        }

        @Override
        public String getPermission() {
            return "pms:issueModule:issueMenu";
        }
}
