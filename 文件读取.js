const fs = require('fs');

//异步读取
fs.readFile('fileTest.txt',function (err,data) {
    if (err){
        return console.error(err);
    }
    console.log('异步读取：' + data.toString());
});

//同步读取
var data = fs.readFileSync('fileTest.txt');
console.log('同步读取：' + data.toString());

console.log('文件读取执行完毕');