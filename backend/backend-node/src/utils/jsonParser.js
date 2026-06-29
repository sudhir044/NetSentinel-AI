exports.safeJsonParse = (text) => {

    try {

        return JSON.parse(text);

    } catch (err) {

        return {

            summary: text,

            severity: "Medium",

            riskScore: 50,

            threats: [],

            recommendations: []

        };

    }

};