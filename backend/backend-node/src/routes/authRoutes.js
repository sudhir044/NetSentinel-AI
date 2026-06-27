const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
    register,
    login,
    getProfile
} = require("../controllers/authController");
const validateRequest = require("../middleware/validationMiddleware");

const router = express.Router();

const {
    registerValidator,
    loginValidator
} = require("../validators/authValidators");

router.post(

    "/register",

    registerValidator,

    validateRequest,

    register

);
router.post(

    "/login",

    loginValidator,

    validateRequest,

    login

);
router.get(
    "/profile",
    protect,
    getProfile
);

module.exports = router;