const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const { check, validationResult } = require("express-validator");

const User = require("../models/User");

router.post(
	"/",
	[
		check("name", "Please add name").not().isEmpty(),
		check("email", "Please include a valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const err = validationResult(req);
		if (!err.isEmpty()) {
			return res.status(400).json({ errors: err.array() });
		}
		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res
					.status(400)
					.json({ msg: "User already exists, Please login" });
			}

			user = new User({
				name,
				email,
				password,
			});

			const salt = await bcrypt.genSalt(15);

			user.password = await bcrypt.hash(password, salt);

			await user.save();
			res.send("User saved");

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{
					expiresIn: 660000,
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).send("Server Error");
		}
	}
);

router.post("/", (req, res) => {
	res.send("Loin User");
});

module.exports = router;
