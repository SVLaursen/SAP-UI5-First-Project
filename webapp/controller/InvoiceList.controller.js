sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.svl.ui5.myUI5App.controller.InvoiceList", {
        formatter : formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
        
        onFilterInvoices : function(oEvent){
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");

            if(sQuery){
                aFilter.push(new Filter("title", FilterOperator.Contains, sQuery));
            }

            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onPress: function(oEvent){
            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteDetailView", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });
        }
	});
});