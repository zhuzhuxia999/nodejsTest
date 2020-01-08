var http = require('http');
//初始化一个 http 服务
http.createServer(function (request,response) {
    //定义请求头
    response.writeHead(200,{'Content-Type':'text/plain'});
    //定义返回数据
    response.end('Hello world');
}).listen(8889);

console.log("欢迎来到 8889 端口");

//读取文件
/**
 * 阻塞 代码示例
 * @type {module:fs}
 */
var fs = require('fs');
var fileData = fs.readFileSync('fileTest.txt');

console.log(fileData.toString());
console.log('程序执行结束');


/***
 * 非阻塞代码
 */
fs.readFile('fileTest.txt',function (err,data) {
    if (err) return console.error(err);
    console.log(data.toString());
})
console.log("非阻塞代码执行结束");