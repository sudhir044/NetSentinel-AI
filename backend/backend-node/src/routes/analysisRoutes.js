const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
    uploadAnalysis,
    getAllAnalysis,
    getAnalysisById,
    deleteAnalysis
} = require("../controllers/analysisController");

// Upload & Analyze
router.post(
    "/upload",
    authMiddleware,
    upload.single("file"),
    uploadAnalysis
);

// Get all analyses
router.get(
    "/",
    authMiddleware,
    getAllAnalysis
);

// Get single analysis
router.get(
    "/:id",
    authMiddleware,
    getAnalysisById
);

// Delete analysis
router.delete(
    "/:id",
    authMiddleware,
    deleteAnalysis
);

module.exports = router;