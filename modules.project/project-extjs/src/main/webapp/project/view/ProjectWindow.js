/**
 * 项目新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.pms.project.view.ProjectWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.pms.project.controller.ProjectWindowController',
        'kalix.pms.project.viewModel.ProjectViewModel',
        'kalix.pms.project.store.ProjectStore',
        'kalix.admin.dict.component.DictCombobox'
    ],
    alias: 'widget.projectWindow',
    viewModel: 'projectViewModel',
    controller: {
        type: 'projectWindowController',
        storeId: 'projectStore'
    },
    xtype: "projectWindow",
    width: 600,
    //todo 在此修改表单

    items: [
        {
            xtype: 'tabpanel',
            items: [
                {
                    title: '项目信息',
                    xtype:'panel',
                    align:'center',
                    border:false,
                    items: [
                        {
                            xtype:'panel',
                            layout: {
                                type: 'vbox',
                                align: 'center'
                            },
                            items:[
                                {
                                    xtype: 'image', //或者xtype: 'component',
                                    id:'imgSrc',
                                    height:300,
                                    width:250,
                                    margin:0,
                                    bind: {
                                        //value:'{rec.imgSrc}',
                                        //hidden : '{!rec.imgSrc}', // 如果system.iconUrl未设置，则此image不显示
                                        src : '{rec.imgSrc}' // 根据system.iconUrl的设置来加载图片
                                    }
                                }]

                        },
                        {
                            xtype:'form',
                            //items:[{
                            //    xtype:'filefield',
                            //    name: 'attachment',
                            //    fieldLabel: '项目图片',
                            //    buttonText: '浏览'
                            //}]


                            items:[
                                //{
                                //    html:'<img id="imgPre" src="" style="display: block;width:200px;height:200px;"/>'
                                //}
                                //,
                                {
                                    xtype:'filefield',
                                    name: 'attachment',
                                    fieldLabel: '项目图片',
                                    listeners:{
                                        render:function(){
                                            this.button.el.dom.children[1].onchange=function() {
                                                var sourceId=this.id, targetId='imgSrc';

                                                if (typeof FileReader === 'undefined') {
                                                    alert('Your browser does not support FileReader...');
                                                    return;
                                                }
                                                var reader = new FileReader();
                                                reader.onload = function(e) {
                                                    var img = document.getElementById(targetId);
                                                    img.src = this.result;
                                                };
                                                reader.readAsDataURL(document.getElementById(sourceId).files[0]);
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype:'baseForm',
                            timeout: 60,
                            items:[
                                {
                                    fieldLabel: '项目名称',
                                    allowBlank: false,
                                    bind: {
                                        value: '{rec.projectName}'
                                    }
                                },
                                {
                                    fieldLabel: '项目标识',
                                    allowBlank: false,
                                    bind: {
                                        value: '{rec.identifier}'
                                    }
                                },
                                {
                                    fieldLabel: '画面比例',
                                    xtype: 'dictCombobox',
                                    dictType: 'pms_project_hmbl',
                                    bind: {
                                        value: '{rec.frameRatio}'
                                    },
                                    listeners:{
                                        'change':function(e,t,options) {
                                            this.lookupViewModel().get('rec').set('frameRatioWidth',e.displayTplData[0].label.split(':')[0]);
                                            this.lookupViewModel().get('rec').set('frameRatioHeight',e.displayTplData[0].label.split(':')[1]);
                                        }
                                    }
                                },
                                {
                                    fieldLabel: '结构、画面长度比例',
                                    hidden:true,
                                    bind: {
                                        value: '{rec.frameRatioWidth}'
                                    }
                                },
                                {
                                    fieldLabel: '结构、画面高度比例',
                                    hidden:true,
                                    bind: {
                                        value: '{rec.frameRatioHeight}'
                                    }
                                },
                                {
                                    fieldLabel: '片长(分钟)',
                                    allowBlank: false,
                                    xtype: 'numberfield',
                                    bind: {
                                        value: '{rec.movieTime}'
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
                                    xtype: 'textareafield',
                                    height: 150,
                                    fieldLabel: '项目描述',
                                    allowBlank: false,
                                    bind: {
                                        value: '{rec.description}'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '投资信息',
                    xtype:'baseForm',
                    border:false,
                    items:[
                        {
                            fieldLabel: '行业类型',
                            allowBlank: false,
                            xtype: 'dictCombobox',
                            dictType: 'pms_project_hylx',
                            bind: {
                                value: '{rec.industryType}'
                            }
                        },
                        {
                            fieldLabel: '投资类型',
                            allowBlank: false,
                            xtype: 'dictCombobox',
                            dictType: 'pms_project_tzlx',
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
                            xtype: 'textareafield',
                            fieldLabel: '投资需求',
                            allowBlank: false,
                            bind: {
                                value: '{rec.investmentDemand}'
                            }
                        }
                    ]
                },
                {
                    title: '其他信息',
                    xtype:'baseForm',
                    border:false,
                    items: [
                        {
                            fieldLabel: '项目级别',
                            allowBlank: false,
                            xtype: 'dictCombobox',
                            dictType: 'pms_project_xmjb',
                            bind: {
                                value: '{rec.projectLevel}'
                            }
                        },
                        {
                            fieldLabel: '紧急程度',
                            allowBlank: false,
                            xtype: 'dictCombobox',
                            dictType: 'pms_project_jjcd',
                            bind: {
                                value: '{rec.priority}'
                            }
                        },
                        {
                            fieldLabel: '当前阶段',
                            allowBlank: false,
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
                            xtype:'textareafield',
                            fieldLabel: '项目标签',
                            allowBlank: false,
                            bind: {
                                value: '{rec.projectTag}'
                            }
                        },
                        {
                            xtype:'textareafield',
                            fieldLabel: '项目背景',
                            allowBlank: false,
                            bind: {
                                value: '{rec.projectIntroduction}'
                            }
                        },
                        {
                            xtype:'textareafield',
                            fieldLabel: '项目目标',
                            allowBlank: false,
                            bind: {
                                value: '{rec.projectGoal}'
                            }
                        },
                        {
                            xtype:'textareafield',
                            fieldLabel: '预期成果',
                            allowBlank: false,
                            bind: {
                                value: '{rec.anticipationResult}'
                            }
                        },
                        {
                            xtype:'textareafield',
                            fieldLabel: '其他',
                            allowBlank: false,
                            bind: {
                                value: '{rec.other}'
                            }
                        }
                    ]
                }
            ]
        }
        //{
        //    xtype:'panel',
        //    title: '项目信息',
        //    items:[
        //        {
        //            xtype:'baseForm',
        //            border:false,
        //            items: [
        //                {
        //                    fieldLabel: '项目名称',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.projectName}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目标识',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.identifier}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '画面比例',
        //                    xtype: 'dictCombobox',
        //                    dictType: 'pms_project_hmbl',
        //                    listeners:{
        //                        'change':function(e,t,options) {
        //                            this.lookupViewModel().get('rec').set('frameRatioWidth',e.displayTplData[0].label.split(':')[0]);
        //                            this.lookupViewModel().get('rec').set('frameRatioHeight',e.displayTplData[0].label.split(':')[1]);
        //                            alert(e);
        //                        }
        //                    }
        //                },
        //                {
        //                    hidden:true,
        //                    fieldLabel: '结构、画面长度比例',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.frameRatioWidth}'
        //                    }
        //                },
        //                {
        //                    hidden:true,
        //                    fieldLabel: '结构、画面高度比例',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.frameRatioHeight}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '影片长度',
        //                    allowBlank: false,
        //                    xtype: 'numberfield',
        //                    bind: {
        //                        value: '{rec.movieTime}'
        //                    }
        //                },
        //                {
        //                    xtype: 'textareafield',
        //                    height: 150,
        //                    fieldLabel: '项目描述',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.description}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目主页',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.homepage}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目状态',
        //                    allowBlank: false,
        //                    xtype: 'numberfield',
        //                    bind: {
        //                        value: '{rec.status}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '投资周期开始',
        //                    allowBlank: false,
        //                    xtype: 'datefield',
        //                    format: 'Y-m-d',
        //                    bind: {
        //                        value: '{rec.startTime}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '投资周期结束',
        //                    allowBlank: false,
        //                    xtype: 'datefield',
        //                    format: 'Y-m-d',
        //                    bind: {
        //                        value: '{rec.finishTime}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '作品类型',
        //                    allowBlank: false,
        //                    xtype: 'numberfield',
        //                    bind: {
        //                        value: '{rec.productionType}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目级别',
        //                    allowBlank: false,
        //                    xtype: 'numberfield',
        //                    bind: {
        //                        value: '{rec.projectLevel}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目优先级',
        //                    allowBlank: false,
        //                    xtype: 'numberfield',
        //                    bind: {
        //                        value: '{rec.priority}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目金额',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.projectMoney}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '人工预算',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.budget}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目当前阶段',
        //                    allowBlank: false,
        //                    xtype: 'numberfield',
        //                    bind: {
        //                        value: '{rec.stage}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目客户',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.customer}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目地域',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.local}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目标签',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.projectTag}'
        //                    }
        //                },
        //            ]
        //        }
        //    ]
        //},
        //{
        //    xtype:'panel',
        //    title: '投资信息',
        //    items: [
        //        {
        //            xtype:'baseForm',
        //            border:false,
        //            items:[
        //                {
        //                    fieldLabel: '项目背景',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.projectIntroduction}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目目标',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.projectGoal}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目预期结果',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.anticipationResult}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '其他',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.other}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '行业类型',
        //                    allowBlank: false,
        //                    xtype: 'numberfield',
        //                    bind: {
        //                        value: '{rec.industryType}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '投资类型',
        //                    allowBlank: false,
        //                    xtype: 'numberfield',
        //                    bind: {
        //                        value: '{rec.investmentType}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目投资方',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.investor}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '项目负责人',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.manager}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '投资需求',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.investmentDemand}'
        //                    }
        //                },
        //                {
        //                    fieldLabel: '投资金额',
        //                    allowBlank: false,
        //                    bind: {
        //                        value: '{rec.investmentMoney}'
        //                    }
        //                },
        //                {
        //                    xtype:'filefield',
        //                    fieldLabel: '项目图片',
        //                    buttonText: '浏览'
        //                }
        //            ]
        //        },
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
        //        //,
        //        //{
        //        //    xtype: 'image', //或者xtype: 'component',
        //        //    height:150,
        //        //    width:150,
        //        //    //border:0,
        //        //    margin:0,
        //        //    bind: {
        //        //        //value:'{rec.imgSrc}',
        //        //        //hidden : '{!rec.imgSrc}', // 如果system.iconUrl未设置，则此image不显示
        //        //        src : '{rec.imgSrc}' // 根据system.iconUrl的设置来加载图片
        //        //    }
        //        //}
        //        //{
        //        //    xtype:'container',
        //        //    //height:200,
        //        //    width:300,
        //        //    border: 1,
        //        //    style: {
        //        //        //borderColor: 'red',
        //        //        borderStyle: 'solid'
        //        //    },
        //        //    items:[
        //        //        {
        //        //            xtype: 'image', //或者xtype: 'component',
        //        //            height:150,
        //        //            width:150,
        //        //            //border:0,
        //        //            margin:0,
        //        //            bind: {
        //        //                //value:'{rec.imgSrc}',
        //        //                //hidden : '{!rec.imgSrc}', // 如果system.iconUrl未设置，则此image不显示
        //        //                src : '{rec.imgSrc}' // 根据system.iconUrl的设置来加载图片
        //        //            }
        //        //        }
        //        //    ]
        //        //}
        //
        //    ]
        //
        //}
    ]
});