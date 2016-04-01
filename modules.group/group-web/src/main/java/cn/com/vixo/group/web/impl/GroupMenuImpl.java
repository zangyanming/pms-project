package cn.com.vixo.group.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class GroupMenuImpl implements IMenu {
    @Override
        public boolean isLeaf() {
            return true;
        }

        @Override
        public String getModuleId() {
            return "constructModule";
        }

        @Override
        public String getParentMenuId() {
            return null;
        }

        @Override
        public String getId() {
            return "groupMenu";
        }

        @Override
        public String getDescription() {
            return "组";
        }

        @Override
        public String getIcon() {
            return null;
        }

        @Override
        public int getIndex() {
            return 90;
        }


        @Override
        public String getIconCls() {
            return "x-fa fa-cutlery";
        }

        @Override
        public String getText() {
            return "组管理";
        }

        @Override
        public String getRouteId() {
            return "pms/group";
        }

        @Override
        public String getPermission() {
            return "admin:constructModule:groupMenu";
        }
}
