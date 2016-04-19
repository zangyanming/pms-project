package cn.com.vixo.standard.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class StandardMenuImpl implements IMenu {
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
            return "standardMenu";
        }

        @Override
        public String getDescription() {
            return "项目规范";
        }

        @Override
        public String getIcon() {
            return null;
        }

        @Override
        public int getIndex() {
            return 20;
        }


        @Override
        public String getIconCls() {
            return "fa fa-file-text";
        }

        @Override
        public String getText() {
            return "项目规范";
        }

        @Override
        public String getRouteId() {
            return "pms/standard";
        }

        @Override
        public String getPermission() {
            return "pms:projectModule:standardMenu";
        }
}
