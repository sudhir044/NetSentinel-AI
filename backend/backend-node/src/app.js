const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const notFound = require("./middleware/notFoundMiddleware");
const errorHandler = require("./middleware/errorMiddleware");
const routes = require("./routes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const predicationRoutes = require("./routes/predicationRoutes");
const aiRoutes = require("./routes/aiRoutes");
const chatHistoryRoutes = require("./routes/chatHistoryRoutes");



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/api/ai", aiRoutes);

app.use("/api/v1", routes);
app.use("/api/predictions", predicationRoutes);
const alertRoutes = require("./routes/alertRoutes");
const reportRoutes = require("./routes/reportRoutes");


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "NetSentinel Node Backend Running"
    });
});
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/alerts", alertRoutes);
app.use(
    "/api/chat-history",
    chatHistoryRoutes
);

app.use(notFound);
app.use(errorHandler);
app.use("/api/reports", reportRoutes);
app.use("/api/ai", aiRoutes);

module.exports = app;

