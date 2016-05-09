package cn.com.vixo.movie.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class MovieElementTypeMenuImpl implements IMenu {
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
            return "movieElementTypeMenu";
        }

        @Override
        public String getDescription() {
            return "元素进度";
        }

        @Override
        public String getIcon() {
            return null;
        }

        @Override
        public int getIndex() {
            return 50;
        }


        @Override
        public String getIconCls() {
            return "x-fa fa-cutlery";
        }

        @Override
        public String getText() {
            return "元素进度";
        }

        @Override
        public String getRouteId() {
            return "pms/elementType";
        }

        @Override
        public String getPermission() {
            return "pms:projectModule:movieElementTypeMenu";
        }
}
