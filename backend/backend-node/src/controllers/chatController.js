const Chat = require("../models/Chat");
const { askAI } = require("../services/aiService");

exports.chat = async (req, res) => {

    try {

        const { message } = req.body;

        const user = req.user.id;

        await Chat.create({

            user,

            role: "user",

            message

        });

        const aiReply = await askAI(message);

        await Chat.create({

            user,

            role: "assistant",

            message: aiReply

        });

        res.json({

            success: true,

            reply: aiReply

        });

    }
    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};