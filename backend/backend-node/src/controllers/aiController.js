const asyncHandler = require("../utils/asyncHandler");

const { successResponse } = require("../utils/apiResponse");

const { chatWithAI } = require("../services/aiService");

const chat = asyncHandler(async (req, res) => {

    const result = await chatWithAI(req.body.message);

    successResponse(
        res,
        result,
        "AI response received"
    );

});

module.exports = {
    chat
};