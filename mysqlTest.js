var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'nodetest',
    port:3306
});

// 第一次写的时候会报错，主要是 本地mysql 版本太高，密码的加密方式改变了
//解决方案   https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
connection.connect();

connection.query('select 1+1 as solution',function (error,results,fields) {
    if (error) throw error;
    console.log('查询的结果是：',results[0].solution);
})

/**  填入数据集
SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
    --  Table structure for `websites`
    -- ----------------------------
        DROP TABLE IF EXISTS `websites`;
CREATE TABLE `websites` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` char(20) NOT NULL DEFAULT '' COMMENT '站点名称',
    `url` varchar(255) NOT NULL DEFAULT '',
    `alexa` int(11) NOT NULL DEFAULT '0' COMMENT 'Alexa 排名',
    `country` char(10) NOT NULL DEFAULT '' COMMENT '国家',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
    --  Records of `websites`
-- ----------------------------
    BEGIN;
INSERT INTO `websites` VALUES ('1', 'Google', 'https://www.google.cm/', '1', 'USA'), ('2', '淘宝', 'https://www.taobao.com/', '13', 'CN'), ('3', '菜鸟教程', 'http://www.runoob.com/', '4689', 'CN'), ('4', '微博', 'http://weibo.com/', '20', 'CN'), ('5', 'Facebook', 'https://www.facebook.com/', '3', 'USA');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
 **/

var sql = 'select * from websites';
//查询
connection.query(sql,function (err,result) {
    if (err){
        console.log('[SELECT ERR] -',err.message );
        return;
    }
    console.log('查询结果是：')
    console.log(result);
})