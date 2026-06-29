const asyncHandler = require("../utils/asyncHandler");

const {
    successResponse,
} = require("../utils/apiResponse");

const {
    getChats,
} = require("../services/chatHistoryService");

const history = asyncHandler(async (req, res) => {

    const chats = await getChats(
        req.user._id
    );

    successResponse(
        res,
        chats,
        "Chat History Retrieved"
    );
});

module.exports = {
    history,
};