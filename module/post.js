const axios = require("axios");


const write = require("./write");


module.exports = async function () {
    let config = require('./data.js').getData()
    const instance = axios.create({
        headers: config.headers,
    });
    try {
        let data = "keys=" + config.idData.join(",");
        const response = await instance.post(config.url, data);
        console.log('请求成功');
        write(response.data);
        return response.data; // 在这里使用 return
    } catch (error) {
        console.log('请求失败', error.message);
        return '请求失败' + error.message; // 在这里使用 return
    }
};
