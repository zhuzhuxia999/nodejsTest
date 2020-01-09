const buf = Buffer.from('王一杰超帅der','ascii');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(10,1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1,2,3]);

const buf5 = Buffer.from('test');

const buf6 = Buffer.from('zaima','base64');

//buffer 写入

buf7 = Buffer.alloc(156);
var len = buf.write("王一杰真是一个帅小伙",'utf8');
console.log('写入字节数:' + len);

//读取字符串  用 tostring
const json = JSON.stringify(buf4);
console.log(json);

//合并缓冲区，用 concat
var buf8 = Buffer.concat([buf,buf1,buf2,buf3],30);
console.log(buf8.toString());
console.log(JSON.stringify(buf8));

// 全局变量
console.log(__filename);
console.log(__dirname);
//定时器 只会执行一次
function printHellp() {
    console.log("Hello world");
}

var t = setTimeout(printHellp,3000);
clearTimeout(t);

//循环多次执行的定时器
var t2 = setInterval(printHellp,1001);
clearInterval(t2);

//全局对象 process
console.log(process.pid);
console.log(process.version);
// console.log(process.env);
console.log(process.arch);
console.log(process.platform);
console.log(process.execPath);