const asyncHandler = require("../utils/asyncHandler");

const { successResponse } = require("../utils/apiResponse");

const {
    getReports,
    generateReport
} = require("../services/reportService");

const getAllReports = asyncHandler(async (req, res) => {

    const reports = await getReports();

    successResponse(
        res,
        reports,
        "Reports fetched successfully"
    );

});

const createReport = asyncHandler(async (req, res) => {

    const report = await generateReport(req.body);

    successResponse(
        res,
        report,
        "Report generated successfully",
        201
    );

});

module.exports = {
    getAllReports,
    createReport
};