const mongoose = require("mongoose");
const config = require("config");
const dataBase = config.get("mongoURI");
// console.log(dataBase);

// Connecting my db with the application
const connectDB = async () => {
	mongoose
		.connect(dataBase)
		.then(() => console.log("Morife is sucessfully running 🏃🏃🏃🏃"))
		.catch((err) => {
			console.error(err.message);
			process.exit(1);
		});
};

module.exports = connectDB;
