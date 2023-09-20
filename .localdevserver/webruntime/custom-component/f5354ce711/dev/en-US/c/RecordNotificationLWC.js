Webruntime.define('lwc/RecordNotificationLWC', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "body" + shadowSelector + " {font-family: Arial, sans-serif;background-color: #f0f0f0;display: flex;justify-content: center;align-items: center;height: 100vh;margin: 0;}\n.warning-card" + shadowSelector + " {background-color: rgba(255, 255, 124, 0.7);border-radius: 10px;padding: 20px;width: 500px;text-align: left;display: flex;flex-direction: row;align-items: center;}\n.exclamation-container" + shadowSelector + " {margin-right: 10px;}\n.exclamation" + shadowSelector + " {font-size: 36px;color: red;}\n.text" + shadowSelector + "{padding-left:20px;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element,
        d: api_dynamic
      } = $api;
      return [api_element("div", {
        classMap: {
          "warning-card": true
        },
        key: 2
      }, [api_element("div", {
        classMap: {
          "exclamation": true
        },
        key: 0
      }, [api_text("!")]), api_element("p", {
        classMap: {
          "text": true
        },
        key: 1
      }, [api_dynamic($cmp.warningmessage)])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-RecordNotificationLWC_RecordNotificationLWC-host",
      shadowAttribute: "lwc-RecordNotificationLWC_RecordNotificationLWC"
    };

    class RecordNotificationLWC extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.warningmessage = '';
        this.symbol = '';
        this.color = '';
      }
    }
    lwc.registerDecorators(RecordNotificationLWC, {
      fields: ["warningmessage", "symbol", "color"]
    });
    var RecordNotificationLWC$1 = lwc.registerComponent(RecordNotificationLWC, {
      tmpl: _tmpl
    });

    return RecordNotificationLWC$1;

});
