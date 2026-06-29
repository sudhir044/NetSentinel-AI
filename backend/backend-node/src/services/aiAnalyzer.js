exports.buildAnalysisPrompt = (logContent) => {
    return `
You are a Senior SOC Analyst.

Analyze the following security log.

Return ONLY valid JSON.

JSON format:

{
  "summary":"",
  "severity":"",
  "riskScore":0,
  "threats":[],
  "recommendations":[]
}

Rules:

1. severity must be one of:
Low
Medium
High
Critical

2. riskScore must be between 0 and 100.

3. recommendations must contain practical security advice.

4. Do NOT include markdown.

Security Log:

${logContent}
`;
};