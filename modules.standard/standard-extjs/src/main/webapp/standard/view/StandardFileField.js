Ext.define('kalix.pms.standard.view.StandardFileField', {
    extend: 'Ext.form.field.Text',
    alias: ['widget.standardFileField'],
    xtype: 'standardFileField',
    requires: [
        'Ext.form.field.FileButton',
        'Ext.form.trigger.Component'
    ],
    needArrowKeys: false,
    triggers: {
        filebutton: {
            type: 'component',
            hideOnReadOnly: false,
            preventMouseDown: false
        }
    },
    buttonText: 'Browse...',
    buttonOnly: false,
    buttonMargin: 3,
    clearOnSubmit: true,
    extraFieldBodyCls: Ext.baseCSSPrefix + 'form-file-wrap',
    inputCls: Ext.baseCSSPrefix + 'form-text-file',
    readOnly: false,
    editable: true,
    submitValue: false,
    triggerNoEditCls: '',
    childEls: ['browseButtonWrap'],
    applyTriggers: function(triggers) {
        var me = this,
            triggerCfg = (triggers || {}).filebutton;

        if (triggerCfg) {
            triggerCfg.component = Ext.apply({
                xtype: 'filebutton',
                ownerCt: me,
                id: me.id + '-button',
                icon: CONFIG.restRoot + '/app/pms/standard/resources/images/standard_add.png',
                ui: me.ui,
                disabled: false,
                text: me.buttonText,
                style: me.buttonOnly ? '' : me.getButtonMarginProp() + me.buttonMargin + 'px',
                inputName: me.getName(),
                listeners: {
                    scope: me,
                    change: me.onFileChange,
                    afterrender:function(target){
                        target.btnWrap.getParent().dom.style.backgroundColor='#ffffff';
                        target.btnWrap.getParent().dom.style.borderColor='#ffffff';
                        target.btnWrap.getParent().dom.style.padding=0;
                        target.btnWrap.getParent().dom.style.borderWidth=0;
                        target.btnWrap.getParent().dom.style.top = '2px';
                        target.btnInnerEl.dom.style.color = '#606060';
                    }
                }
            }, me.buttonConfig);

            return me.callParent([triggers]);
        }
        // <debug>
        else {
            Ext.raise(me.$className + ' requires a valid trigger config containing "filebutton" specification');
        }
        // </debug>
    },

    getSubTplData: function(fieldData) {
        var data = this.callParent([fieldData]);
        data.tabIdx = -1;
        return data;
    },
    onRender: function() {
        var me = this,
            inputEl, button, buttonEl, trigger;

        me.callParent(arguments);

        inputEl = me.inputEl;
        //name goes on the fileInput, not the text input
        inputEl.dom.name = '';
        inputEl.on('focus', me.focus, me);

        trigger = me.getTrigger('filebutton');
        button = me.button = trigger.component;
        me.fileInputEl = button.fileInputEl;
        buttonEl = button.el;

        if (me.buttonOnly) {
            me.inputWrap.setDisplayed(false);
            me.shrinkWrap = 3;
        }

        trigger.el.setWidth(buttonEl.getWidth() + buttonEl.getMargin('lr'));
        if (Ext.isIE) {
            me.button.getEl().repaint();
        }
    },
    getTriggerMarkup: function() {
        return '<td id="' + this.id + '-browseButtonWrap" data-ref="browseButtonWrap" role="presentation"></td>';
    },
    onFileChange: function(button, e, value) {
        this.duringFileSelect = true;
        Ext.form.field.File.superclass.setValue.call(this, value);
        delete this.duringFileSelect;
    },

    didValueChange: function(){
        return !!this.duringFileSelect;
    },
    setValue: Ext.emptyFn,

    reset : function(){
        var me = this,
            clear = me.clearOnSubmit;
        if (me.rendered) {
            me.button.reset(clear);
            me.fileInputEl = me.button.fileInputEl;
            if (clear) {
                me.inputEl.dom.value = '';
                // Reset the underlying value if we're clearing it
                Ext.form.field.File.superclass.setValue.call(this, null);
            }
        }
        me.callParent();
    },

    onShow: function(){
        this.callParent();
        this.button.updateLayout();
    },

    onDisable: function(){
        this.callParent();
        this.button.disable();
    },

    onEnable: function(){
        this.callParent();
        this.button.enable();
    },
    isFileUpload: Ext.returnTrue,

    extractFileInput: function() {
        var me = this,
            fileInput;

        if (me.rendered) {
            fileInput = me.button.fileInputEl.dom;
            me.reset();
        } else {
            fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.className = Ext.baseCSSPrefix + 'hidden-display';
            fileInput.name = me.getName();
        }
        return fileInput;
    },

    restoreInput: function(el) {
        if (this.rendered) {
            var button = this.button;
            button.restoreInput(el);
            this.fileInputEl = button.fileInputEl;
        }
    },

    onDestroy: function(){
        this.fileInputEl = this.button = null;
        this.callParent();
    },

    getButtonMarginProp: function() {
        return 'margin-left:';
    },

    privates: {
        getFocusEl: function() {
            return this.button;
        },

        getFocusClsEl: Ext.privateFn
    }
});

