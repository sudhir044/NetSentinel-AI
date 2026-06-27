const asyncHandler = require("../utils/asyncHandler");

const { successResponse } = require("../utils/apiResponse");

const {
    getDashboardStats
} = require("../services/dashboardService");

const dashboardStats = asyncHandler(async (req, res) => {

    const stats = await getDashboardStats();

    successResponse(
        res,
        stats,
        "Dashboard stats fetched successfully"
    );

});

module.exports = {
    dashboardStats
};