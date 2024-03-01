var path = require("path");
const log4js = require('log4js');
log4js.configure({
    appenders: {
        cheese: {
            type: 'dateFile',
            filename: 'logs/cheese',
            pattern: "-yyyy-MM-dd.log",
            alwaysIncludePattern: true,
            category: 'normal'
        }
    },
    categories: { default: { appenders: ['cheese'], level: 'info' } }
});

const logger = log4js.getLogger('cheese');

module.exports=logger
