sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("com.svl.ui5.myUI5App.controller.MainView", {

      onInit: function(){
        this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      },

      onOpenDialog : function(){
        this.getOwnerComponent().openHelloDialog();
      }    
  });
});
