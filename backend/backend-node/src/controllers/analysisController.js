const Analysis = require("../models/Analysis");

const { parseFile } = require("../services/fileParser");

const { analyzeLog } = require("../services/aiAnalyzer");

const { safeJsonParse } = require("../utils/jsonParser");

exports.uploadAnalysis = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "No file uploaded"

            });

        }

        const extractedText = await parseFile(req.file);

        const aiResponse = await analyzeLog(extractedText);

        const result = safeJsonParse(aiResponse);

        const analysis = await Analysis.create({

            user: req.user.id,

            filename: req.file.filename,

            originalName: req.file.originalname,

            fileType: req.file.mimetype,

            fileSize: req.file.size,

            filePath: req.file.path,

            summary: result.summary,

            analysis: extractedText,

            severity: result.severity,

            riskScore: result.riskScore,

            recommendations: result.recommendations,

            status: "Completed"

        });

        res.status(201).json({

            success: true,

            analysis

        });

    } catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};