var fs = require('fs');


/**
 * 读取数据,读入流
 */
var data = '';
// 初始化读入流,并配置 文件路径
var readerStream = fs.createReadStream('fileTest.txt');
// 设置编码
readerStream.setEncoding('UTF8');
// 当有可读数据时触发
readerStream.on('data',function(chunk){
    data += chunk;
    console.log('监听data加载数据开始**********************');
    console.log(data);
    console.log('监听data加载数据结束***********************');
});
// 当数据读完时候触发
readerStream.on('end',function(){
    console.log(data);
});
// 当过程中发生错误时候触发
readerStream.on('error',function(){
    console.error(error);
});
// 最先执行的是这句话,可以看出这是一个异步的过程
console.log('程序执行完毕');


/**
 * 写入数据,写入流
 */
var data2 = '这是一个文件看看最后对出来的是什么王一杰将会赢取博士小姐姐过上幸福美满的生活~';
var writeStream = fs.createWriteStream('fileTest.txt');
writeStream.write(data2,'UTF8');

writeStream.end();

writeStream.on('finish',function(){
    console.log('写入完成');
});

writeStream.on('error',function(){
    console.log(err);
});

console.log('写入程序执行完毕');
// 我发现这样子是会直接把目标文件中的文件进行覆盖，就是说原先的内容直接没有了
