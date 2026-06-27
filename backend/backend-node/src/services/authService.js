const User = require("../models/User");
const Role = require("../models/Role");

const ROLES = require("../constants/roles");

const { hashPassword } = require("../auth/password");
const { generateToken } = require("../auth/jwt");
const { comparePassword } = require("../auth/password");
const AppError = require("../utils/AppError");




const registerUser = async (data) => {

    const existingEmail = await User.findOne({
        email: data.email
    });

    if (existingEmail) {
        throw new AppError("Email already exists", 409);
    }

    const existingUsername = await User.findOne({
        username: data.username
    });

    if (existingUsername) {
        throw new AppError("Username already exists", 409);
    }

    const userRole = await Role.findOne({
        name: ROLES.USER
    });

    if (!userRole) {
        throw new AppError("User role not found", 500);
    }

    const password = await hashPassword(data.password);

    const user = await User.create({

        firstName: data.firstName,

        lastName: data.lastName,

        username: data.username,

        email: data.email,

        password,

        role: userRole._id

    });

    const token = generateToken({
        userId: user._id,
        roleId: user.role,
        email: user.email,
    });

    const userObject = user.toObject();

    delete userObject.password;

    return {
        user: userObject,
        token,
    };

};


const loginUser = async ({ email, password }) => {

    const user = await User.findOne({ email })
        .populate("role");

    if (!user)
        throw new AppError("Invalid email or password", 401);

    const isMatch = await comparePassword(
        password,
        user.password
    );

    if (!isMatch)
        throw new Error("Invalid email or password");

    const token = generateToken({

        userId: user._id,

        roleId: user.role._id,

        email: user.email

    });

    const userObject = user.toObject();

    delete userObject.password;

    return {

        user: userObject,

        token

    };

};

module.exports = {
    registerUser,
    loginUser
};