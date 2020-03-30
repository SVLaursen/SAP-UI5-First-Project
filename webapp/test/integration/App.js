sap.ui.define([
    "sap/ui/Opa5",
    "sap/ui/actions/Press"
], function(Opa5, Press){
    "use strict";

    var sViewName = "com.svl.ui5.myUI5App.view.HelloPanel";

    Opa5.createPageObjects({
        onTheAppPage: {
            actions: {
                iPressSayHelloWithDialogButton: function(){
                    return this.waitFor({
                        id: "helloDialogButton",
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Did not find the 'Say Hello With Dialog' button on the HelloPanel view"
                    });
                }
            },
            assertions: {
                iShouldSeeTheHelloDialog: function(){
                    return this.waitFor({
                        controlType: "sap.m.Dialog",
                        success: function(){
                            Opa5.assert.ok(true, "The dialog is open");
                        },
                        errorMessage: "Did not find the dialog control"
                    });
                }
            }
        }
    });
});