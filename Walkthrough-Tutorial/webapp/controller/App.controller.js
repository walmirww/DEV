sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function(Controller, MessageToast) {
    "use strict";
 
    return Controller.extend("sap.ui.demo.walkthrough.App", {
       onShowHello() {
          // show a native JavaScript alert
          //alert("Hello World from Controller");
          MessageToast.show("Hello World");
       }
    });
 });