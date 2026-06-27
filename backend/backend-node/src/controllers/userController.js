const asyncHandler = require("../utils/asyncHandler");
const { successResponse } = require("../utils/apiResponse");

const {
    getAllUsers,
    getUserById,
    updateUser
} = require("../services/userService");

const getUsers = asyncHandler(async (req, res) => {

    const users = await getAllUsers();

    successResponse(
        res,
        users,
        "Users fetched successfully"
    );

});

const getUser = asyncHandler(async (req, res) => {

    const user = await getUserById(req.params.id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    successResponse(
        res,
        user,
        "User fetched successfully"
    );

});

const updateUserController = asyncHandler(async (req, res) => {

    const user = await updateUser(
        req.params.id,
        req.body
    );

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    successResponse(
        res,
        user,
        "User updated successfully"
    );

});

module.exports = {
    getUsers,
    getUser,
    updateUserController
};