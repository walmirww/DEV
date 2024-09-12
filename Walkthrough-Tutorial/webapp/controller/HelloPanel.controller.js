sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            // read msg from i18n model
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sRecipient = this.getView().getModel().getProperty("/recipient/name");
            let sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // Show message
            MessageToast.show(sMsg);
        },

        async onOpenDialog() {
            // create dialog lazily
            this.oDialog ??= await this.loadFragment({
                name: "sap.ui.demo.walkthrough.view.HelloDialog"
            });
        
            this.oDialog.open();
        },

        onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		}
    })
});