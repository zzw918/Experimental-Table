 // 定义： APP对象，为本项目的全局对象
if (typeof APP !== 'object') {
    APP = {};
}

// 定义： APP.cfg, 为本项目配置信息
APP.cfg = {};

// 配置： APP的版本
APP.cfg.ver = '1.0';

// 配置： 版本的名称
APP.cfg.name = "talkRobot";

// 配置： 本项目的接口
APP.cfg.url =  "http://www.tuling123.com/openapi/api?key=20ff1803ff65429b809a310653c9daac";

// 配置： 项目默认语言
APP.cfg.lang = "cn";


// 定义公用函数对象
APP.common = {};

APP.common.ua = navigator.userAgent.toLowerCase();