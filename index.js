var server = require('./serverForRoute');
var router = require('./router');
// index 的作用仅仅是执行 server.start()  函数，为什么不直接访问 serverForRoute.js  文件呢
// 是为了解耦
server.start(router.route);