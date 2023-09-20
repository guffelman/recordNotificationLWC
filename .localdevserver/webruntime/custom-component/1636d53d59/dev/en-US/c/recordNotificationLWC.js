Webruntime.define('lwc/recordNotificationLWC', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".warning-card" + shadowSelector + " {border-radius: 10px;padding: 20px;text-align: left;display: flex;flex-direction: row;align-items: center;}\n.exclamation-container" + shadowSelector + " {margin-right: 10px;display: flex;justify-content: center;align-items: center;width: 50px;height: 50px;border-radius: 50%;box-shadow: 0 0 0 5px rgba(255, 255, 124, 0.7);}\n.exclamation" + shadowSelector + " {font-size: 36px;}\n.text" + shadowSelector + " {padding-left: 20px;}\n.warning-card.warning" + shadowSelector + " .exclamation-container" + shadowSelector + " {box-shadow: 0 0 0 5px rgba(255, 255, 124, 0.7);background-color: rgba(255, 255, 124, 0.7);color: black;}\n.warning-card.error" + shadowSelector + " .exclamation-container" + shadowSelector + " {box-shadow: 0 0 0 5px rgba(255, 0, 0, 0.7);background-color: rgba(255, 0, 0, 0.7);color: white;}\n.warning-card.success" + shadowSelector + " .exclamation-container" + shadowSelector + " {box-shadow: 0 0 0 5px rgba(0, 255, 0, 0.7);background-color: rgba(0, 255, 0, 0.7);color: white;}\n.warning-card.info" + shadowSelector + " .exclamation-container" + shadowSelector + " {box-shadow: 0 0 0 5px rgba(0, 0, 255, 0.7);background-color: rgba(0, 0, 255, 0.7);color: white;}\n.warning-card" + shadowSelector + " .exclamation-container" + shadowSelector + " {background-color: rgba(255, 255, 124, 0.7);}\n.warning" + shadowSelector + " {background-color: rgba(255, 255, 124, 0.7);}\n";
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
        attrs: {
          "data-id": "warning-card"
        },
        key: 3
      }, [api_element("div", {
        classMap: {
          "exclamation-container": true
        },
        key: 1
      }, [api_element("div", {
        classMap: {
          "exclamation": true
        },
        key: 0
      }, [api_dynamic($cmp.symbol)])]), api_element("p", {
        classMap: {
          "text": true
        },
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
        this.symbol = '!';
        this.type = 'warning';
      }
      connectedCallback() {
        switch (this.type) {
          case 'warning':
            this.symbol = '!';
            break;
          case 'error':
            this.symbol = 'X';
            break;
          case 'success':
            this.symbol = '✓';
            break;
          case 'info':
            this.symbol = 'i';
            break;
          default:
            this.symbol = '!';
        }
      }
      renderedCallback() {
        // set the background-color of the 'warning-card' element
        // to 'color' 
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
        }
      }
    });
    var recordNotificationLWC = lwc.registerComponent(RecordNotificationLWC, {
      tmpl: _tmpl
    });

    return recordNotificationLWC;

});
