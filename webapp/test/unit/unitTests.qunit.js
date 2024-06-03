/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo_ui5_app/demo_ui5_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
