const express = require("express");

const router = express.Router();

router.use("/auth", require("./authRoutes"));
router.use("/users", require("./userRoutes"));
router.use("/chat-history", require("./chatHistoryRoutes"));

module.exports = router;