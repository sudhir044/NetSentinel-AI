const express = require("express");

const router = express.Router();

router.use("/auth", require("./authRoutes"));
router.use("/users", require("./userRoutes"));
router.use("/chat-history", require("./chatHistoryRoutes"));
router.use("/chat", require("./chatRoutes"));

module.exports = router;