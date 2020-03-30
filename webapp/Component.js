sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/svl/ui5/myUI5App/model/models",
	"sap/ui/model/json/JSONModel",
	"./controller/HelloDialog"
], function(UIComponent, Device, models, JSONModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("com.svl.ui5.myUI5App.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			//Set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");	
			
			// Set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
		},

		exit: function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog: function() {
			this._helloDialog.open();
		},

		getContentDensityClass: function(){
			if(!this._sContentDensityClass){
				this._sContentDensityClass = !Device.support.touch ? "sapUiSizeCompact" : "sapUiSizeCozy";
			}
			return this._sContentDensityClass;
		}
	});
});
