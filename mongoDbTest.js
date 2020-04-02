/**
 * 创建连接
 */
var mongoClient = require('mongodb').MongoClient();
var url = 'mongodb://localhost:27017/runoob';

MongoClient.connect(url,{useNewUrlParse:true},function (err,db) {
    if (err) throw err;
    console.log('数据库已经创建');

    
    db.close();
});