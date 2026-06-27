const { body } = require("express-validator");

const registerValidator = [
    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("First name is required"),

    body("lastName")
        .trim()
        .notEmpty()
        .withMessage("Last name is required"),

    body("username")
        .trim()
        .isLength({ min: 4 })
        .withMessage("Username must be at least 4 characters"),

    body("email")
        .isEmail()
        .withMessage("Invalid email"),

    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters"),
];

const loginValidator = [

    body("email")
        .isEmail()
        .withMessage("Invalid Email"),

    body("password")
        .notEmpty()
        .withMessage("Password Required")

];

module.exports = {
    registerValidator,
    loginValidator
};