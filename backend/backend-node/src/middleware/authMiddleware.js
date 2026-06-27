const User = require("../models/User");
const { verifyToken } = require("../auth/jwt");

const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided.",
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = verifyToken(token);

        const user = await User.findById(decoded.userId)
            .populate("role")
            .select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found.",
            });
        }

        req.user = user;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });

    }
};

module.exports = protect;