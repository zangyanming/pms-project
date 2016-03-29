Ext.define('kalix.pms.standard.view.StandardForm', {
    extend: 'Ext.form.Panel',
    requires: ['kalix.pms.standard.view.StandardFileField'],
    alias: 'widget.standardForm',
    xtype: 'standardForm',
    frame: true,
    timeout: 60,
    height:20,
    items: [
        {
            xtype: 'standardFileField',
            width:50,
            buttonOnly:true,
            buttonText: '上传',
            name: 'standard',
            listeners:{
                change:function(target,value, eOpts){
                    target.findParentByType('grid').getController().onChange(target, value, eOpts);
                }
            }
        }
    ],
    listeners:{
        afterrender: function (target) {
           target.ariaEl.dom.style.border='none';
        },
        beforerender: function (target) {
            this.items.getAt(0).triggers.filebutton.component.icon = this.filebutonIcon;
        }
    }
});