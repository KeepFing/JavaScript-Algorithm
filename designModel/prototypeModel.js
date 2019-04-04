/*
 * @version: 1.0
 * @Description: JavaScript设计模式-原型模式
 * @Author: WangWen
 * @LastEditors: WangWen
 * @email: bear393048@163.com
 * @Date: 2019-04-04 14:21:00
 * @LastEditTime: 2019-04-04 14:29:30
 */
function Car(model, year, price){

    Car.prototype.model = model
    Car.prototype.year = year
    Car.prototype.price = price

    Car.prototype.getCar = function(){
        return this.year + ' 年生产 ' + this.model + " 售价 " + this.price + " 人民币"
    }

}

let axela = new Car('Mazda Axela', 2018, 115000)

console.log(axela)
console.log(axela.getCar())