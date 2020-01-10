var http = require('http');
var url = require('url');

// 将路由函数作为一个参数传递给 服务器
function start(route){
    function onRequest(request,response){
        var pathName = url.parse(request.url).pathname;
        console.log('请求的路径是 ' + pathName);
        // 将 pathname 交给路由处理
        route(pathName);
        // 设置返回的 http 的信息
        response.writeHead(200,{'content-Type':'text/plain'});
        // 设置返回体
        response.write('hello world');
        // 编辑 http 设置完成
        response.end();
    }
    // 设置服务器监听
    http.createServer(onRequest).listen(8888);
    console.log('服务器初始化完成');
    
}
// 将这个函数暴露出去
exports.start = start;