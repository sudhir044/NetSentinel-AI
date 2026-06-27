const asyncHandler = require("../utils/asyncHandler");

const { successResponse } = require("../utils/apiResponse");

const {
    getAlerts,
    createAlert
} = require("../services/alertService");

const getAllAlerts = asyncHandler(async (req, res) => {

    const alerts = await getAlerts();

    successResponse(
        res,
        alerts,
        "Alerts fetched successfully"
    );

});

const addAlert = asyncHandler(async (req, res) => {

    const alert = await createAlert(req.body);

    successResponse(
        res,
        alert,
        "Alert created successfully",
        201
    );

});

module.exports = {
    getAllAlerts,
    addAlert
};