const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect db
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
	res.json({ msg: "Welcome to my API" });
});

// Definng routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Production
// if(process.env.NODE_ENV === 'production') {
// 	// Set static folder
// 	app.use(express.static('client/build'));

// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// 	});
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
	// console.log(`Data Base connected succesfully in PORT ${PORT}`);
});
