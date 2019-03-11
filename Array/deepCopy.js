/*
 * @version: 1.0
 * @Description: 引用数据类型的深拷贝
 * @Author: WangWen
 * @LastEditors: WangWen
 * @email: bear393048@163.com
 * @Date: 2019-03-11 11:47:15
 * @LastEditTime: 2019-03-11 11:52:40
 */



/**
 * 
 * @param {*} p : 需要拷贝的原始数据
 * @param {*} c : 拷贝后输出的数据
 */
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === "object") {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i])
        } else {
            c[i] = p[i]
        }
    }
    return c;
}