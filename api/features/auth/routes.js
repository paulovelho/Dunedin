"use strict";

module.exports = (app) => {
	var controller = require("./controller");

	app.route("/login")
		.post(controller.access.bind(controller));
  app.route("/token")
  	.get(controller.isAuthenticated.bind(controller), controller.token.bind(controller));

};
