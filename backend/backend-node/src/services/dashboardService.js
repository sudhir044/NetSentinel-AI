async function getDashboardStats() {
    return {
        metrics: [
            {
                title: "Healthy Nodes",
                value: "98%",
                change: "+2.3%",
                color: "green"
            },
            {
                title: "Critical Alerts",
                value: "04",
                change: "-1",
                color: "red"
            },
            {
                title: "AI Accuracy",
                value: "96.8%",
                change: "+0.8%",
                color: "cyan"
            },
            {
                title: "Avg. Latency",
                value: "18 ms",
                change: "-3 ms",
                color: "yellow"
            }
        ],

        performance: [
            { time: "00:00", traffic: 120 },
            { time: "04:00", traffic: 180 },
            { time: "08:00", traffic: 250 },
            { time: "12:00", traffic: 305 },
            { time: "16:00", traffic: 275 },
            { time: "20:00", traffic: 210 },
            { time: "24:00", traffic: 260 }
        ],

        insight: {
            title: "AI Recommendation",
            severity: "Critical",
            confidence: "96%",
            message:
                "Router R-203 has an 89% probability of failure within the next 2 hours due to increasing packet loss and CPU utilization.",
            recommendation:
                "Reroute traffic through Bengaluru Hub and inspect Router R-203 immediately."
        }
    };
}

module.exports = {
    getDashboardStats
};