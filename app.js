//jshint esversion:9
const express = require("express");
const cors = require("cors");
const sensor = require("./api/sensor");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sensor", sensor);

// io.on("connection", (socket) => {
// 	console.log("user connected", socket.id);
// 	socket.on("cool", (data) => {
// 		console.log(data);
// 		socket.broadcast.emit("message", "hahahaha");
// 	});
// });

module.exports = app;
