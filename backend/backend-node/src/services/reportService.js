

const getReports = async () => {

    return [
        {
            id: 1,
            reportName: "Network Health Report",
            generatedBy: "Admin",
            createdAt: new Date(),
            status: "Completed"
        },
        {
            id: 2,
            reportName: "Prediction Report",
            generatedBy: "Admin",
            createdAt: new Date(),
            status: "Completed"
        }
    ];

};

const generateReport = async (data) => {

    return {
        id: Date.now(),
        reportName: data.reportName,
        generatedBy: "Admin",
        createdAt: new Date(),
        status: "Completed"
    };

};

module.exports = {
    getReports,
    generateReport
};