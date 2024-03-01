var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {readFileSync} = require("fs");
// 读取文件内容
const filePath = './nodeconfig.json';
const configData = readFileSync(filePath, 'utf-8');

var indexRouter = require('./routes/index');
var dataRouter = require('./routes/data');
// var log = require('./log.js');
var post = require('./module/post.js');
var data = require('./module/data.js');
    data.setData(JSON.parse(configData))
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/data', dataRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
console.log("我运行了-------------------")


    // 执行特定操作
setInterval(async () => {
    console.log("执行了")
       await post()
}, data.getData().IntervalTime)


module.exports = app;
