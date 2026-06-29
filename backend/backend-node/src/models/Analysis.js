const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        filename: {
            type: String,
            required: true,
            trim: true,
        },

        originalName: {
            type: String,
            required: true,
            trim: true,
        },

        filePath: {
            type: String,
            required: true,
        },

        fileType: {
            type: String,
            required: true,
        },

        fileSize: {
            type: Number,
            required: true,
        },

        extractedText: {
            type: String,
            default: "",
        },

        summary: {
            type: String,
            default: "",
        },

        analysis: {
            type: String,
            default: "",
        },

        severity: {
            type: String,
            enum: ["Low", "Medium", "High", "Critical"],
            default: "Low",
        },

        riskScore: {
            type: Number,
            min: 0,
            max: 100,
            default: 0,
        },

        attackType: {
            type: String,
            default: "Unknown",
        },

        mitreTechnique: {
            type: String,
            default: "",
        },

        iocs: [
            {
                type: String,
            },
        ],

        recommendations: [
            {
                type: String,
            },
        ],

        status: {
            type: String,
            enum: ["Pending", "Processing", "Completed", "Failed"],
            default: "Pending",
        },

        startedAt: {
            type: Date,
        },

        completedAt: {
            type: Date,
        },

        error: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Analysis", analysisSchema);