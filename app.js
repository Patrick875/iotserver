//jshint esversion:9
const express = require("express");
const cors = require("cors");
const sensor = require("./api/sensor");
const app = express();

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);
app.use(express.json());

app.use("/api/sensor", sensor);

module.exports = app;
