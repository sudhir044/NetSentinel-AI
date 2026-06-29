const axios = require("axios");

const { buildAnalysisPrompt } = require("../prompts/analysisPrompt");

exports.analyzeLog = async (logContent) => {

    const prompt = buildAnalysisPrompt(logContent);

    const response = await axios.post(

        "http://localhost:11434/api/generate",

        {
            model: "phi3:mini",

            prompt,

            stream: false
        }

    );

    return response.data.response;

};