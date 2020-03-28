sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function (MockServer, UriParameters){
    "use strict";

    return{
        init: function(){
            var oMockServer = new MockServer({
                rootUri: "http://localhost:8081/https://services.odata.org/V2/Northwind/Nortwind.svc"
            });
            
            var oUriParameters = new UriParameters(window.location.href);

            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 500
            });

            var sPath = "../localService";
            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
            oMockServer.start();
        }
    }
});