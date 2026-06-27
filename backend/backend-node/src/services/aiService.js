const axios = require("axios");

const chatWithAI = async (message) => {

    try {

        const response = await axios.post(
            "http://127.0.0.1:8000/api/chat",
            {
                message
            }
        );

        return response.data;

    } catch (error) {

        return {
            success: false,
            message: "FastAPI server is not running."
        };

    }

};

module.exports = {
    chatWithAI
};