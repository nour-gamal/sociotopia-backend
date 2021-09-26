const express = require("express");
const User = require("../models/User");

const userRouter = new express.Router();

userRouter.post("/register", (req, res) => {
	res.send(req.body);
});

module.exports = userRouter;
