const express = require("express");
const SensorData = require("../models/dataSchema");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const data = await SensorData.find();

		if (data) {
			res.json({
				status: 200,
				data,
			});
		} else {
			res.json({
				status: 200,
				message: "welcome",
			});
		}
	} catch (error) {
		res.json({
			status: 200,
			message: error.message,
		});
		console.log(error.message);
	}
});

router.post("/", async (req, res) => {
	const newData = await SensorData.create(req.body);

	res.json({
		status: 201,
		data: newData,
	});
});

module.exports = router;
