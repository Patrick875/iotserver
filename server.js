const mongoose = require("mongoose");
const app = require("./app");
const port = 3500;

mongoose
	.connect(
		"mongodb+srv://PatrickK:M0dKY3Jds7ZRq51v@cluster0.v0j9y.mongodb.net/?retryWrites=true&w=majority",
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

app.listen(port, () => {
	console.log(`app sucessfully connected on port ${port}`);
});
