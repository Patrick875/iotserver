//jshint esversion:9
const mongoose = require("mongoose");
const app = require("./app");
const port = 3500;
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:8100",
		methods: ["GET", "POST"],
		transports: ["websocket", "polling"],
		credentials: true,
	},
	allowEIO3: true,
});

mongoose
	.connect(
		"mongodb+srv://PatrickK:M0dKY3Jds7ZRq51v@cluster0.v0j9y.mongodb.net/iot?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then((con) => {
		console.log("DB connection successful");
	})
	.catch((err) => {
		console.log(err.name, err.message);
	});

const connection = mongoose.connection;

connection.once("open", () => {
	console.log("db connected");
	console.log("setting streams");

	const sensorDataChangeStream = connection.collection("sensordatas").watch();

	sensorDataChangeStream.on("change", (change) => {
		switch (change.operationType) {
			case "insert":
				console.log(change);
				io.emit("newData", change.fullDocument);
				break;
		}
	});
});

server.listen(port, () => {
	console.log(`app sucessfully connected on port ${port}`);
});
