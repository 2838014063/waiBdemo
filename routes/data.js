var express = require('express');
var router = express.Router();
var post = require('../module/post.js');

/* GET users listing. */
router.post('/', async function (req, res, next) {
    let data = await post()
    console.log(data)
    res.send(data);
});
router.get('/', async function (req, res, next) {
    let data = await post()
    console.log(data)

    res.send(data);
});

module.exports = router;
