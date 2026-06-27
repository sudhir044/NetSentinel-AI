const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
    getUsers,
    getUser,
    updateUserController
} = require("../controllers/userController");

router.get(
    "/",
    protect,
    authorize("admin", "super_admin"),
    getUsers
);

router.get(
    "/:id",
    protect,
    authorize("admin", "super_admin"),
    getUser
);

router.put(
    "/:id",
    protect,
    authorize("admin", "super_admin"),
    updateUserController
);

module.exports = router;