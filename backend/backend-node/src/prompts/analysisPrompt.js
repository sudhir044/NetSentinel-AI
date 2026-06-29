const buildAnalysisPrompt = (logContent) => {
    return `
You are an expert Cyber Security Analyst.

Analyze the following security log.

Return ONLY valid JSON.

JSON format:

{
  "summary": "",
  "analysis": "",
  "severity": "Low | Medium | High | Critical",
  "riskScore": 0,
  "attackType": "",
  "mitreTechnique": "",
  "iocs": [],
  "recommendations": []
}

Rules:

1. Do not return markdown.
2. Do not explain anything outside JSON.
3. riskScore must be between 0 and 100.
4. recommendations should be an array.

Security Log:

${logContent}
`;
};

module.exports = {
    buildAnalysisPrompt,
};