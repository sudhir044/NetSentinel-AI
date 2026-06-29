const mongoose = require("mongoose");

const chatHistorySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        question: {
            type: String,
            required: true,
        },

        answer: {
            type: String,
            required: true,
        },

        model: {
            type: String,
            default: "llama3.2",
        },

        sources: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "ChatHistory",
    chatHistorySchema
);