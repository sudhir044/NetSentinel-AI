const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const parseTxt = async (filePath) => {
    return fs.promises.readFile(filePath, "utf8");
};

const parseLog = async (filePath) => {
    return fs.promises.readFile(filePath, "utf8");
};

const parseJson = async (filePath) => {
    const content = await fs.promises.readFile(filePath, "utf8");

    const json = JSON.parse(content);

    return JSON.stringify(json, null, 2);
};

const parseCsv = async (filePath) => {
    return new Promise((resolve, reject) => {

        const rows = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (row) => {

                rows.push(row);

            })
            .on("end", () => {

                const text = rows
                    .map(row => Object.values(row).join(" | "))
                    .join("\n");

                resolve(text);

            })
            .on("error", reject);

    });
};

const parseFile = async (file) => {

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
            throw new Error("Unsupported file format");
    }

};

module.exports = {
    parseFile
};