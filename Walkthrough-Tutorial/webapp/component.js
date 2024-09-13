sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/Device"
], function (UIComponent, JSONModel, Device) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata : {
             manifest: "json"
        },

        init : function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            let oData = {
                recipient: {
                    name: "UI5"
                }
            };
            let oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set device model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel, "device");

            // create the views based on the url/hash
            this.getRouter().initialize();
        }
    });
});