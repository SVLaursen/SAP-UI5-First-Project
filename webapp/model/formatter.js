sap.ui.define([], function(){
    "use strict";

    return{
        statusText: function(sStatus){
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            
            switch(sStatus){
                case "A":
                    return resourceBundle.getText("invoiceStatusA");
                case "B":
                    return resourceBundle.getText("invoiceStatusB");
                case "C":
                    return resourceBundle.getText("invoiceStatusC");
                default:
                    return sStatus;
            }
        },
        numberUnit : function(sValue){
            return !sValue ? "" : parseFloat(sValue).toFixed(2);
        }
    };
});