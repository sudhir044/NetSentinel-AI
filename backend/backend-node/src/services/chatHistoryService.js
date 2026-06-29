const ChatHistory = require("../models/ChatHistory");

const saveChat = async (data) => {
    return await ChatHistory.create(data);
};

const getChats = async (userId) => {
    return await ChatHistory.find({
        user: userId,
    }).sort({
        createdAt: -1,
    });
};

module.exports = {
    saveChat,
    getChats,
};