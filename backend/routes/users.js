const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private

router.post("/", (req, res) => {
	res.send("Register a user");
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private

router.post("/", (req, res) => {
	res.send("Loin User");
});

module.exports = router;
