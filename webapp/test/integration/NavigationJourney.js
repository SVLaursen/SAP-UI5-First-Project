/*global QUnit, opaTest */
sap.ui.define([
    "com/svl/ui5/myUI5App/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/App"
], function(mockserver){
    "use strict";

    QUnit.module("Navigation");
    opaTest("Should open the Hello dialog", function(Given, When, Then){
        mockserver.init();

        Given.iStartMyUIComponent({
            componentConfig: {
                name: "com.svl.ui5.myUI5App"
            }
        });

        When.onTheAppPage.iPressTheSayHelloWithDialogButton();
        Then.onTheAppPage.iShouldSeeTheHelloDialog();
        Then.iTeardownMyApp();
    });
});