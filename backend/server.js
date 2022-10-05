const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect db
connectDB();

app.get("/", (req, res) => {
	res.json({ msg: "Welcome to my API" });
});

// Definng routes
app.use("/api/users", require("./routes/users"));
app.use("/api/ath", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
	// console.log(`Data Base connected succesfully in PORT ${PORT}`);
});
