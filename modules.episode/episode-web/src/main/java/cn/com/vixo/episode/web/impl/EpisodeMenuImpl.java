package cn.com.vixo.episode.web.impl;

import cn.com.rexen.core.api.web.IMenu;

public class EpisodeMenuImpl implements IMenu {
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
            return "episodeMenu";
        }

        @Override
        public String getDescription() {
            return "集管理";
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
            return "集管理";
        }

        @Override
        public String getRouteId() {
            return "pms/episode";
        }

        @Override
        public String getPermission() {
            return "pms:projectModule:episodeMenu";
        }
}
