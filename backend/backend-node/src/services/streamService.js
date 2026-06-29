const axios = require("axios");

const streamChat = async (message) => {

    return axios({
        method: "post",
        url: `${process.env.FASTAPI_URL}/api/stream`,
        data: {
            message,
        },
        responseType: "stream",
    });
};

module.exports = {
    streamChat,
};

