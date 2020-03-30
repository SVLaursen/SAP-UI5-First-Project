/*global QUnit*/

QUnit.config.autostart = false;
sap.ui.getCore().attachInit(function(){
    "use strict";

    sap.ui.require([
        "com/svl/ui5/myUI5App/test/unit/model/formatter"
    ], function(){
        QUnit.start();
    });
});