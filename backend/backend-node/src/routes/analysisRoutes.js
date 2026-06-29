const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

const {
    uploadAnalysis
} = require("../controllers/analysisController");

router.post(
    "/upload",
    auth,
    upload.single("file"),
    uploadAnalysis
);

module.exports = router;