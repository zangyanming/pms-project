/**
 * 集模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.pms.episode.viewModel.EpisodeViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.episodeViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看集',
        add_title: '添加集',
        edit_title: '修改集',
        add_image_path: '/kalix/app/pms/episode/resources/images/episode_add.png',
        view_image_path: '/kalix/app/pms/episode/resources/images/episode_view.png',
        edit_image_path: '/kalix/app/pms/episode/resources/images/episode_edit.png',
    }
});