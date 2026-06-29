const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

/**
 * Read TXT file
 */
const parseTxt = async (filePath) => {
    return await fs.promises.readFile(filePath, "utf8");
};

/**
 * Read LOG file
 */
const parseLog = async (filePath) => {
    return await fs.promises.readFile(filePath, "utf8");
};

/**
 * Read JSON file
 */
const parseJson = async (filePath) => {
    const content = await fs.promises.readFile(filePath, "utf8");

    const json = JSON.parse(content);

    return JSON.stringify(json, null, 2);
};

/**
 * Read CSV file
 */
const parseCsv = async (filePath) => {

    return new Promise((resolve, reject) => {

        const rows = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (row) => {

                rows.push(row);

            })
            .on("end", () => {

                const result = rows
                    .map((row) => Object.values(row).join(" | "))
                    .join("\n");

                resolve(result);

            })
            .on("error", reject);

    });

};

/**
 * Main parser
 */
const parseFile = async (file) => {

    if (!file) {
        throw new Error("No file uploaded");
    }

    const extension = path.extname(file.originalname).toLowerCase();

    switch (extension) {

        case ".txt":
            return await parseTxt(file.path);

        case ".log":
            return await parseLog(file.path);

        case ".json":
            return await parseJson(file.path);

        case ".csv":
            return await parseCsv(file.path);

        default:
            throw new Error("Unsupported file type");

    }

};

module.exports = {
    parseFile,
};