//jshint esversion:9
const mongoose = require("mongoose");

const sensorDataSchema = mongoose.Schema(
	{
		temperature: Number,
		humidity: Number,
		ecg: Number,
		co_level: Number,
	},
	{ timestamps: true }
);

const SensorData = new mongoose.model("SensorData", sensorDataSchema);

module.exports = SensorData;
