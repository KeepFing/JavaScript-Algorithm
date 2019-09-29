/*
 * @version: 1.0
 * @Description: 设计模式===>策略模式
 * @Author: WangWen
 * @Date: 2019-09-29 15:49:29
 * @LastEditTime: 2019-09-29 15:56:51
 * @LastEditors: WangWen
 * @email: bear393048@163.com
 */

/**
 * @version: 1.0
 * @description: 定义一个策略类，定义策略名为键名，值为一个匿名函数，这样对应的策略就有一个对应的方法去处理数据
 *              比如策略A对应的处理是将num的参数每次加2并返回，以此类推
 * @param : {}
 * @return: {}
 */
let strategy = {
    "A": function(num){
        return num += 2
    },
    "B": function(num){
        return num += 4
    },
    "C": function(num){
        return num *= 3
    }
}

/**
 * @version: 1.0
 * @description: 定义一个环境的类，不可变，将接收用户的请求，并将请求委托给某一个策略来获取对应策略的计算值
 * @param : {}
 * @return: {}
 */
function Strategy(strategy, num){
    return strategy[strategy](num)
}

console.log(Strategy("B", 20))