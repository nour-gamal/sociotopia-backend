const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Invalid Email Address !");
			}
		},
		lowerCase: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
		validate(value) {
			const isStrongPassword = value.test(
				"(?=^.{8,}$)(?=.*d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
			);
			if (!isStrongPassword) {
				throw new Error("Please Enter A Strong Password!");
			}
		},
	},
	gender: {
		type: String,
		required: true,
	},
	birthDay: {
		type: Date,
		required: true,
	},

	phone: {
		type: Number,
		required: false,
		validate(value) {
			if (value.length < 9) {
				throw new Error("Please Enter A Valid number");
			}
		},
	},
});

module.exports = User;
