const axios = require("axios");
const { buildAnalysisPrompt } = require("../prompts/analysisPrompt");

const analyzeLog = async (logContent) => {

    const prompt = buildAnalysisPrompt(logContent);

    const response = await axios.post(
        "http://localhost:11434/api/generate",
        {
            model: "phi3:mini",   // Change if you use llama3, mistral, etc.
            prompt,
            stream: false,
        }
    );

    return response.data.response;
};

module.exports = {
    analyzeLog,
};