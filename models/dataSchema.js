//jshint esversion:9
const mongoose = require("mongoose");

const sensorDataSchema = mongoose.Schema({
	temperature: Number,
	humitidy: Number,
	heartRate: Number,
	co_level: Number,
});

const SensorData = new mongoose.model("SensorData", sensorDataSchema);

module.exports = SensorData;
