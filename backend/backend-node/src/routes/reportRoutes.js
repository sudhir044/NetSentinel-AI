const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    getAllReports,
    createReport
} = require("../controllers/reportController");

router.get(
    "/",
    protect,
    getAllReports
);

router.post(
    "/generate",
    protect,
    createReport
);

module.exports = router;