const analyzePrediction = async (data) => {

    return {
        predictionId: Date.now().toString(),
        deviceName: data.deviceName,
        healthScore: 92,
        status: "Healthy",
        confidence: 97,
        recommendation: "No maintenance required."
    };

};

module.exports = {
    analyzePrediction
};