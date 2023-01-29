//jshint esversion:9
const express = require("express");
const cors = require("cors");
const sensor = require("./api/sensor");
const serverless = require("serverless-http");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/.netlify/functions/server", sensor);

module.exports = app;
module.exports.handler = serverless(app);
