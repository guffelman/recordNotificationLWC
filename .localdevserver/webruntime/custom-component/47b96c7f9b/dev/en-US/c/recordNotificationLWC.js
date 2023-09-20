Webruntime.define('lwc/recordNotificationLWC', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".warning-card" + shadowSelector + " {border-radius: 10px;padding: 20px;text-align: left;display: flex;flex-direction: row;align-items: center;}\n.exclamation-container" + shadowSelector + " {margin-right: 10px;display: flex;justify-content: center;align-items: center;width: 50px;height: 50px;border-radius: 50%;}\n.exclamation" + shadowSelector + " {font-size: 36px;}\n.text" + shadowSelector + " {padding-left: 20px;font-size: 16px;font-weight: 600;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        h: api_element
      } = $api;
      return [api_element("div", {
        classMap: {
          "warning-card": true
        },
        style: $cmp.bgColor,
        attrs: {
          "data-id": "warning-card"
        },
        key: 3
      }, [api_element("div", {
        classMap: {
          "exclamation-container": true
        },
        style: $cmp.symbolContainer,
        key: 1
      }, [api_element("div", {
        classMap: {
          "exclamation": true
        },
        style: $cmp.symbolTextStyle,
        key: 0
      }, [api_dynamic($cmp.symbol)])]), api_element("p", {
        classMap: {
          "text": true
        },
        style: $cmp.textStyle,
        key: 2
      }, [api_dynamic($cmp.warningMessage)])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-recordNotificationLWC_recordNotificationLWC-host",
      shadowAttribute: "lwc-recordNotificationLWC_recordNotificationLWC"
    };

    class RecordNotificationLWC extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.warningMessage = 'This is a warning message!';
        this.symbol = '';
        this.type = 'warning';
        this.bgColor = void 0;
        this.textStyle = void 0;
        this.symbolContainer = void 0;
        this.symbolTextStyle = void 0;
        this.animation = void 0;
      }
      connectedCallback() {
        switch (this.type) {
          case 'warning':
            if (!this.symbol) {
              this.symbol = '!';
            }
            this.symbolContainer = 'background-color: rgba(255, 255, 124, 0.7); box-shadow: 0 0 0 5px rgba(255, 255, 124, 0.4);';
            this.bgColor = 'background-color: rgba(255, 255, 0, 0.4);';
            this.textStyle = 'color: rgba(0, 0, 0, 0.7);';
            this.symbolTextStyle = 'color: rgba(0, 0, 0, 0.7);';
            break;
          case 'error':
            if (!this.symbol) {
              this.symbol = 'X';
            }
            this.symbolContainer = 'background-color: rgba(255, 0, 0, 0.7); box-shadow: 0 0 0 5px rgba(255, 0, 0, 0.4);';
            this.bgColor = 'background-color: rgba(255, 0, 0, 0.4);';
            this.textStyle = 'color: rgba(255, 255, 255, 0.7);';
            this.symbolTextStyle = 'color: rgba(255, 255, 255, 0.7);';
            break;
          case 'success':
            if (!this.symbol) {
              this.symbol = '✓';
            }
            this.symbolContainer = 'background-color: rgba(0, 255, 0, 0.7); box-shadow: 0 0 0 5px rgba(0, 255, 0, 0.4); ';
            this.bgColor = 'background-color: rgba(0, 255, 0, 0.4);';
            this.textStyle = 'color: rgba(0, 0, 0, 0.7);';
            this.symbolTextStyle = 'color: rgba(0, 0, 0, 0.7);';
            break;
          case 'info':
            if (!this.symbol) {
              this.symbol = 'i';
            }
            this.symbolContainer = 'background-color: rgba(0, 0, 255, 0.7); box-shadow: 0 0 0 5px rgba(0, 0, 255, 0.4);';
            this.bgColor = 'background-color: rgba(0, 0, 255, 0.4);';
            this.textStyle = 'color: rgba(255, 255, 255, 0.7);';
            this.symbolTextStyle = 'color: rgba(255, 255, 255, 0.7);';
            break;
          default:
            if (!this.symbol) {
              this.symbol = '!';
            }
            this.symbolContainer = 'background-color: rgba(255, 255, 124, 0.7); box-shadow: 0 0 0 5px rgba(255, 255, 124, 0.4);';
            this.bgColor = 'background-color: rgba(255, 255, 0, 0.4);';
            this.textStyle = 'color: rgba(0, 0, 0, 0.7);';
            this.symbolTextStyle = 'color: rgba(0, 0, 0, 0.7);';
        }
        if (this.animation) {
          this.bgColor += this.animation;
        }
      }
    }
    lwc.registerDecorators(RecordNotificationLWC, {
      publicProps: {
        warningMessage: {
          config: 0
        },
        symbol: {
          config: 0
        },
        type: {
          config: 0
        },
        bgColor: {
          config: 0
        },
        textStyle: {
          config: 0
        },
        symbolContainer: {
          config: 0
        },
        symbolTextStyle: {
          config: 0
        },
        animation: {
          config: 0
        }
      }
    });
    var recordNotificationLWC = lwc.registerComponent(RecordNotificationLWC, {
      tmpl: _tmpl
    });

    return recordNotificationLWC;

});
