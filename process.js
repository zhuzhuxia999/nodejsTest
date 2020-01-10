process.on('exit',function(code){
    setTimeout(function(){
        console.log('改代码永远不会执行');
        // 为什么永远不会执行呢，因为监听的是 exit ,这个时候进程已经结束，
        // 也就不会执行这个匿名函数了
    },1000);
    console.log('推出码为：',code);
    
});

console.log('proess.js 执行结束');
