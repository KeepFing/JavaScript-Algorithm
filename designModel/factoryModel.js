/*
 * @version: 1.0
 * @Description: JavaScript设计模式-工厂模式
 * @Author: WangWen
 * @LastEditors: WangWen
 * @email: bear393048@163.com
 * @Date: 2019-04-04 14:11:04
 * @LastEditTime: 2019-09-29 15:32:08
 */
function Car(model, year, price){
    let car = new Object()

    car.model = model
    car.year = year
    car.price = price

    car.getCar = function(){
        return car.year + ' 年生产 ' + car.model + " 售价 " + car.price + " 人民币"
    }
    return car
}

let axela = Car('Mazda Axela', 2018, 115000)

console.log(axela)
console.log(axela.getCar())

/**
 * 在函数中定义对象，并定义对象的各种属性，虽然属性可以为方法，但是建议将属性为方法的属性定义到函数之外，
 * 这样可以避免重复创建该方法。
 * 引用该对象的时候，这里使用的是 var x = Car()而不是 var x = new Car(); 
 * 因为后者可能会出现很多问题（前者也成为工厂经典方式，后者称之为混合工厂方式）。
 * 在函数的最后返回该对象。
 * 
 */