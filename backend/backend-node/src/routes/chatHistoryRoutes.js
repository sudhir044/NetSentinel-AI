const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    history,
} = require("../controllers/chatHistoryController");

router.get(
    "/",
    protect,
    history
);

module.exports = router;