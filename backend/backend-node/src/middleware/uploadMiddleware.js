const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },

    filename: (req, file, cb) => {
        const uniqueName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9) +
            path.extname(file.originalname);

        cb(null, uniqueName);
    },
});

// Allowed file extensions
const allowedExtensions = [".txt", ".log", ".json", ".csv"];

// File filter
const fileFilter = (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();

    if (!allowedExtensions.includes(extension)) {
        return cb(
            new Error(
                "Only TXT, LOG, JSON and CSV files are allowed."
            ),
            false
        );
    }

    cb(null, true);
};

// Upload middleware
const upload = multer({
    storage,
    fileFilter,

    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
    },
});

module.exports = upload;