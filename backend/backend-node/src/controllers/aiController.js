const asyncHandler = require("../utils/asyncHandler");

const { successResponse } = require("../utils/apiResponse");

const { chatWithAI } = require("../services/aiService");

const chat = asyncHandler(async (req, res) => {

    const result = await chatWithAI(req.body.message);
    
    // Save chat history
    const { saveChat } = require("../services/chatHistoryService");
    await saveChat({
        user: req.user._id,
        question: req.body.message,
        answer: result.answer,
        sources: result.sources,
    });

    successResponse(
        res,
        result,
        "AI Response Generated"
    );

});

module.exports = {
    chat
};