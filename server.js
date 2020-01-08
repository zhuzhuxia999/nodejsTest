var http = require('http');
//初始化一个 http 服务
http.createServer(function (request,response) {
    //定义请求头
    response.writeHead(200,{'Content-Type':'text/plain'});
    //定义返回数据
    response.end('Hello world');
}).listen(8889);

console.log("欢迎来到 8889 端口")