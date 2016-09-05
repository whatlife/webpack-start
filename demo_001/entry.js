/**
 * Created by liangyl on 2016/9/5 0005.
 */

document.getElementById('app').innerHTML = '这个是webpack的开始！！';

require('./src/css/style.css');
var Vue = require("vue");
new Vue({
    el: "#demo",
    data: {
        message: "hello , i am vue.js! glade to see u"
    }
}); 