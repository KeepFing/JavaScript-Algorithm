/*
 * @version: 1.0
 * @Description: JavaScript设计模式-单例模式
 * @Author: WangWen
 * @LastEditors: WangWen
 * @email: bear393048@163.com
 * @Date: 2019-04-04 14:35:12
 * @LastEditTime: 2019-04-04 14:42:51
 */
function Singleton(model, year, price){

    this.model = model
    this.year = year
    this.price = price


}

Singleton.prototype.getCar = function(){
    return this.year + ' 年生产 ' + this.model + " 售价 " + this.price + " 人民币"
}

let getInstance = (function(){
    let instance = null
    return function(model, year, price){
        if (!instance) {
            instance = new Singleton(model, year, price)
        }
        return instance
    }
})()


let axela = getInstance('Mazda Axela', 2018, 115000)
let civic = getInstance('Honda Civic', 2018, 150000)

console.log(axela)
console.log(civic)