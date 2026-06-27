const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    analyze
} = require("../controllers/predictionController");

router.post(
    "/analyze",
    protect,
    analyze
);

module.exports = router;