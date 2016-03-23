/**
 * 项目新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.project.view.ProjectWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.project.viewModel.ProjectViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.user.store.UserStore'
    ],
    alias: 'widget.projectWindow',
    viewModel: 'projectViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'projectStore'
    },
    xtype: "projectWindow",
    width: 700,
    //todo 在此修改表单

    items: [
        {
            xtype:'panel',
            items:[
                {
                    xtype:'baseForm',
                    border:false,
                    items: [
                        {
                            fieldLabel: '项目名称',
                            allowBlank: false,
                            bind: {
                                value: '{rec.projectName}'
                            }
                        },
                        {
                            xtype: 'textareafield',
                            height: 150,
                            fieldLabel: '项目描述',
                            allowBlank: false,
                            bind: {
                                value: '{rec.description}'
                            }
                        },
                        {
                            fieldLabel: '项目主页',
                            allowBlank: false,
                            bind: {
                                value: '{rec.homepage}'
                            }
                        },
                        {
                            fieldLabel: '项目标识',
                            allowBlank: false,
                            xtype: 'numberfield',
                            bind: {
                                value: '{rec.identifier}'
                            }
                        },
                        {
                            fieldLabel: '项目状态',
                            allowBlank: false,
                            xtype: 'numberfield',
                            bind: {
                                value: '{rec.status}'
                            }
                        },
                        {
                            fieldLabel: '投资周期开始',
                            allowBlank: false,
                            xtype: 'datefield',
                            format: 'Y-m-d',
                            bind: {
                                value: '{rec.startTime}'
                            }
                        },
                        {
                            fieldLabel: '投资周期结束',
                            allowBlank: false,
                            xtype: 'datefield',
                            format: 'Y-m-d',
                            bind: {
                                value: '{rec.finishTime}'
                            }
                        },
                        {
                            fieldLabel: '作品类型',
                            allowBlank: false,
                            xtype: 'numberfield',
                            bind: {
                                value: '{rec.productionType}'
                            }
                        },
                        {
                            fieldLabel: '影片长度',
                            allowBlank: false,
                            xtype: 'numberfield',
                            bind: {
                                value: '{rec.movieTime}'
                            }
                        },
                        {
                            fieldLabel: '项目级别',
                            allowBlank: false,
                            xtype: 'numberfield',
                            bind: {
                                value: '{rec.projectLevel}'
                            }
                        },
                        {
                            fieldLabel: '项目优先级',
                            allowBlank: false,
                            xtype: 'numberfield',
                            bind: {
                                value: '{rec.priority}'
                            }
                        },
                        {
                            fieldLabel: '项目金额',
                            allowBlank: false,
                            bind: {
                                value: '{rec.projectMoney}'
                            }
                        },
                        {
                            fieldLabel: '人工预算',
                            allowBlank: false,
                            bind: {
                                value: '{rec.budget}'
                            }
                        },
                        {
                            fieldLabel: '项目当前阶段',
                            allowBlank: false,
                            xtype: 'numberfield',
                            bind: {
                                value: '{rec.stage}'
                            }
                        },
                        {
                            fieldLabel: '项目客户',
                            allowBlank: false,
                            bind: {
                                value: '{rec.customer}'
                            }
                        },
                        {
                            fieldLabel: '项目地域',
                            allowBlank: false,
                            bind: {
                                value: '{rec.local}'
                            }
                        },
                        {
                            fieldLabel: '项目标签',
                            allowBlank: false,
                            bind: {
                                value: '{rec.projectTag}'
                            }
                        },
                    ]
                }

            ]


        },
        {
            xtype:'panel',
            items: [
                {
                    xtype:'baseForm',
                    border:false,
                    items:[
                        {
                            fieldLabel: '项目背景简介',
                            allowBlank: false,
                            bind: {
                                value: '{rec.projectIntroduction}'
                            }
                        },
                        {
                            fieldLabel: '项目目标',
                            allowBlank: false,
                            bind: {
                                value: '{rec.projectGoal}'
                            }
                        },
                        {
                            fieldLabel: '项目预期结果',
                            allowBlank: false,
                            bind: {
                                value: '{rec.anticipationResult}'
                            }
                        },
                        {
                            fieldLabel: '其他',
                            allowBlank: false,
                            bind: {
                                value: '{rec.other}'
                            }
                        },
                        {
                            fieldLabel: '行业类型',
                            allowBlank: false,
                            xtype: 'numberfield',
                            bind: {
                                value: '{rec.industryType}'
                            }
                        },
                        {
                            fieldLabel: '投资类型',
                            allowBlank: false,
                            xtype: 'numberfield',
                            bind: {
                                value: '{rec.investmentType}'
                            }
                        },
                        {
                            fieldLabel: '项目投资方',
                            allowBlank: false,
                            bind: {
                                value: '{rec.investor}'
                            }
                        },
                        {
                            fieldLabel: '项目负责人',
                            allowBlank: false,
                            bind: {
                                value: '{rec.manager}'
                            }
                        },
                        {
                            fieldLabel: '投资需求',
                            allowBlank: false,
                            bind: {
                                value: '{rec.investmentDemand}'
                            }
                        },
                        {
                            fieldLabel: '投资金额',
                            allowBlank: false,
                            bind: {
                                value: '{rec.investmentMoney}'
                            }
                        },
                        {
                            xtype:'filefield',
                            fieldLabel: 'Photo'
                        }
                    ]
                },
                {
                    xtype: 'image', //或者xtype: 'component',
                    height:150,
                    width:150,
                    //border:0,
                    margin:0,
                    bind: {
                        //value:'{rec.imgSrc}',
                        //hidden : '{!rec.imgSrc}', // 如果system.iconUrl未设置，则此image不显示
                        src : '{rec.imgSrc}' // 根据system.iconUrl的设置来加载图片
                    }
                }
                //,
                //{
                //    xtype: 'image', //或者xtype: 'component',
                //    height:150,
                //    width:150,
                //    //border:0,
                //    margin:0,
                //    bind: {
                //        //value:'{rec.imgSrc}',
                //        //hidden : '{!rec.imgSrc}', // 如果system.iconUrl未设置，则此image不显示
                //        src : '{rec.imgSrc}' // 根据system.iconUrl的设置来加载图片
                //    }
                //}
                //{
                //    xtype:'container',
                //    //height:200,
                //    width:300,
                //    border: 1,
                //    style: {
                //        //borderColor: 'red',
                //        borderStyle: 'solid'
                //    },
                //    items:[
                //        {
                //            xtype: 'image', //或者xtype: 'component',
                //            height:150,
                //            width:150,
                //            //border:0,
                //            margin:0,
                //            bind: {
                //                //value:'{rec.imgSrc}',
                //                //hidden : '{!rec.imgSrc}', // 如果system.iconUrl未设置，则此image不显示
                //                src : '{rec.imgSrc}' // 根据system.iconUrl的设置来加载图片
                //            }
                //        }
                //    ]
                //}

            ]

        }
    ]
});