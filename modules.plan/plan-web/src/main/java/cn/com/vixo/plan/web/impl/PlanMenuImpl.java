package cn.com.vixo.plan.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class PlanMenuImpl implements IMenu {
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
            return "planMenu";
        }

        @Override
        public String getDescription() {
            return "项目计划";
        }

        @Override
        public String getIcon() {
            return null;
        }

        @Override
        public int getIndex() {
            return 40;
        }


        @Override
        public String getIconCls() {
            return "fa fa-clock-o";
        }

        @Override
        public String getText() {
            return "项目计划";
        }

        @Override
        public String getRouteId() {
            return "pms/plan";
        }

        @Override
        public String getPermission() {
            return "pms:projectModule:planMenu";
        }
}
