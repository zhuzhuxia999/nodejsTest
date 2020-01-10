// node 和 java 函数方面最大的区别是，node 可以把函数作为参数直接传入
// 相当于一次函数内部的调用了

function say(word){
    console.log('进入 say 函数');
    
    console.log(word);
}

function execute(someFunction,value){
    someFunction(value);
}
// 只需要传递函数名即可，不需要带上函数的实参
execute(say,'hello function');


/**
 * 匿名函数
 */
function niming(anyFunction,value){
    anyFunction(value);
}

niming(function(word){console.log(word);
},'hello niming');