const mongoose = require("mongoose");
const app = require("./app");
const port = 3500;

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

// const connection = mongoose.connect();

// connection.once("open", () => {
// 	console.log("setting log streams");

// 	const setSensorChangeStream = connection.collection("");
// });
app.listen(port, () => {
	console.log(`app sucessfully connected on port ${port}`);
});
