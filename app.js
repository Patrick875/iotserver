//jshint esversion:9
const express = require("express");
const cors = require("cors");
const sensor = require("./api/sensor");
const app = express();

var whitelist = ["http://localhost:3000"];
var corsOptions = {
	credentials: true,
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/sensor", sensor);

module.exports = app;
