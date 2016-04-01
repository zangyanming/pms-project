package cn.com.vixo.user.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class ProjectUserMenuImpl implements IMenu {
    @Override
        public boolean isLeaf() {
            return true;
        }

        @Override
        public String getModuleId() {
            return "projectModule";
        }

        @Override
        public String getParentMenuId() {
            return null;
        }

        @Override
        public String getId() {
            return "projectUserMenu";
        }

        @Override
        public String getDescription() {
            return "项目成员";
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
            return "x-fa fa-cutlery";
        }

        @Override
        public String getText() {
            return "项目成员";
        }

        @Override
        public String getRouteId() {
            return "pms/user";
        }

        @Override
        public String getPermission() {
            return "pms:projectModule:projectUserMenu";
        }
}
