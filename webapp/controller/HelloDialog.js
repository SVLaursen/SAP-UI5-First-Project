sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function(ManagedObject, Fragment, syncStyleClass){
    "use strict";

    return ManagedObject.extend("com.svl.ui5.myUI5App.controller.HelloDialog", {
        constructor : function(oView){
            this._oView = oView;
        },

        exit : function(){
            delete this._oView;
        },

        open : function(){
            var oView = this._oView;

            if(!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog : function(){
                        oView.byId("helloDialog").close();
                    }
                };

                Fragment.load({
                    id: oView.getId(),
                    name: "com.svl.ui5.myUI5App.view.fragments.HelloDialog",
                    controller: oFragmentController
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
                    oDialog.open();
                });
            }else {
                oView.byId("helloDialog").open();
            }
        }
    });
});