//jshint esversion:9
const express = require("express");
const sensor = require("./api/sensor");
const app = express();

app.use(express.json());

app.use("/api/sensor", sensor);

module.exports = app;
