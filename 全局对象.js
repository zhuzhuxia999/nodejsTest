// node 中的全局对象是 global
// 所有的全局变量都是 global 对象的属性，所以可以说 global 是全局变量的宿主
/**
 * __filename  全局变量，表示当前的文件名,
 * 注意！！这里是两个下划线
 */

 console.log('_filename: ' + __filename);
 /***
  * __dirnama  当前文件所在的目录
  */
 console.log('__dirname: ' + __dirname);

 /**
  * setTimeout 全局函数，只会执行一次的定时器
  */

setTimeout(function(){console.log('定时器执行~~~~~~~~~~')},2000);
 
/***
 * clearTimeout(函数名)  清除某一个定时器
 */
var t = setTimeout(function(){console.log('将会被清除的定时器~~~~~~~~~~')},2000);
clearImmediate(t);


/**
 * setInterval 循环调用的定时器，直到 clearInterval  被调用或者关闭窗口
 */
var t2 = setInterval(function(){console.log('i love u three thousands')
},10);
 clearInterval(t2);