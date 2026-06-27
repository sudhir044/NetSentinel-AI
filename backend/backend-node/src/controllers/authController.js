

const asyncHandler = require("../utils/asyncHandler");

const { successResponse } = require("../utils/apiResponse");

const {
    registerUser,
    loginUser
} = require("../services/authService");

// Register
const register = asyncHandler(async (req, res) => {



    const result = await registerUser(req.body);

    successResponse(
        res,
        {
            user: result.user,
            token: result.token
        },
        "User Registered Successfully",
        201
    );
});

// Login
const login = asyncHandler(async (req, res) => {

    const result = await loginUser(req.body);

    successResponse(
        res,
        {
            user: result.user,
            token: result.token
        },
        "Login Successful"
    );
});

// Get Profile
const getProfile = asyncHandler(async (req, res) => {

    successResponse(
        res,
        req.user,
        "Profile Retrieved Successfully"
    );
});

module.exports = {
    register,
    login,
    getProfile
};