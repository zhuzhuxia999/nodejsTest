var events = require('events');

var eventEmitter = new events.EventEmitter();
//监听器
//on 函数用于绑定事件函数
eventEmitter.on('some_event',function () {
    console.log('some_event 事件触发');
});

setTimeout(function () {
    //emit 属性用于触发一个事件
    eventEmitter.emit('some_event');
},1000);