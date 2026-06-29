const safeJsonParse = (text) => {

    try {
        let cleanText = text.trim();
        if (cleanText.startsWith("```json")) {
            cleanText = cleanText.substring(7);
        } else if (cleanText.startsWith("```")) {
            cleanText = cleanText.substring(3);
        }
        if (cleanText.endsWith("```")) {
            cleanText = cleanText.substring(0, cleanText.length - 3);
        }
        const parsed = JSON.parse(cleanText.trim());
        
        if (Array.isArray(parsed.iocs)) {
            parsed.iocs = parsed.iocs.map(i => typeof i === 'string' ? i : JSON.stringify(i));
        } else {
            parsed.iocs = [];
        }

        if (Array.isArray(parsed.recommendations)) {
            parsed.recommendations = parsed.recommendations.map(i => typeof i === 'string' ? i : JSON.stringify(i));
        } else {
            parsed.recommendations = [];
        }

        return parsed;
    } catch (err) {

        console.error("Invalid AI JSON:", err.message);

        return {
            summary: "Unable to parse AI response.",
            analysis: text,
            severity: "Medium",
            riskScore: 50,
            attackType: "Unknown",
            mitreTechnique: "",
            iocs: [],
            recommendations: [],
        };
    }

};

module.exports = {
    safeJsonParse,
};