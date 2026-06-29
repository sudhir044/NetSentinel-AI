const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get(
    "/dashboard",
    authMiddleware,
    roleMiddleware("admin", "super_admin"),
    (req, res) => {
        res.json({
            success: true,
            message: "Welcome Admin",
            user: req.user
        });
    }
);
router.get(
    "/users",
    authMiddleware,
    roleMiddleware("super_admin"),
    async (req, res) => {

        const users = await User.find().select("-password");

        res.json(users);

    }
);

module.exports = router;