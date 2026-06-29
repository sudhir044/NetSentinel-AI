const fs = require("fs");
const Analysis = require("../models/Analysis");

const { parseFile } = require("../services/fileParser");
const { analyzeLog } = require("../services/aiAnalyzer");
const { safeJsonParse } = require("../utils/jsonParser");

/**
 * Upload & Analyze File
 */
exports.uploadAnalysis = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

        // Read uploaded file
        const extractedText = await parseFile(req.file);

        // Send to AI
        const aiResponse = await analyzeLog(extractedText);

        // Parse AI JSON safely
        const result = safeJsonParse(aiResponse);

        // Save to MongoDB
        const analysis = await Analysis.create({

            user: req.user.id,

            filename: req.file.filename,

            originalName: req.file.originalname,

            filePath: req.file.path,

            fileType: req.file.mimetype,

            fileSize: req.file.size,

            extractedText,

            summary: result.summary,

            analysis: result.analysis,

            severity: result.severity,

            riskScore: result.riskScore,

            attackType: result.attackType,

            mitreTechnique: result.mitreTechnique,

            iocs: result.iocs,

            recommendations: result.recommendations,

            status: "Completed",

            startedAt: new Date(),

            completedAt: new Date()

        });

        res.status(201).json({
            success: true,
            message: "Analysis completed successfully",
            data: analysis
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

/**
 * Get all analyses of logged-in user
 */
exports.getAllAnalysis = async (req, res) => {

    try {

        const analyses = await Analysis.find({
            user: req.user.id
        })
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: analyses.length,
            data: analyses
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

/**
 * Get single analysis
 */
exports.getAnalysisById = async (req, res) => {

    try {

        const analysis = await Analysis.findOne({

            _id: req.params.id,

            user: req.user.id

        });

        if (!analysis) {

            return res.status(404).json({

                success: false,

                message: "Analysis not found"

            });

        }

        res.json({

            success: true,

            data: analysis

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

/**
 * Delete analysis
 */
exports.deleteAnalysis = async (req, res) => {

    try {

        const analysis = await Analysis.findOne({

            _id: req.params.id,

            user: req.user.id

        });

        if (!analysis) {

            return res.status(404).json({

                success: false,

                message: "Analysis not found"

            });

        }

        // Delete uploaded file
        if (fs.existsSync(analysis.filePath)) {

            fs.unlinkSync(analysis.filePath);

        }

        await analysis.deleteOne();

        res.json({

            success: true,

            message: "Analysis deleted successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};