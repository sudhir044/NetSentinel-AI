const express = require("express");

const router = express.Router();
router.use("/analysis", require("./analysisRoutes"));

const protect = require("../middleware/authMiddleware");

const {
    dashboardStats
} = require("../controllers/dashboardController");

router.get(
    "/stats",
    protect,
    dashboardStats
);
router.use("/auth", require("./authRoutes"));
router.use("/users", require("./userRoutes"));
router.use("/chat", require("./chatRoutes"));
router.use("/chat-history", require("./chatHistoryRoutes"));

module.exports = router;