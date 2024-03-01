const fs = require('fs');
const path = require("path");

module.exports = function (data) {
    const config = require('./data.js').getData()

    const jsonString = JSON.stringify(data, null, 2);
    try {
        if (!fs.existsSync(config.filePath)) {
            fs.mkdirSync(config.filePath);
        }
        fs.writeFileSync(config.filePath + config.fileName, jsonString, 'utf-8');
        console.log('JSON 文件写入成功:', config.filePath + config.fileName);
    } catch (err) {
        console.error('写入文件时发生错误:', err);
    }
}
