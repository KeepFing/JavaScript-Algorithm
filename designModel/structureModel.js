/*
 * @version: 1.0
 * @Description: 设计模式-构造器模式
 * @Author: WangWen
 * @LastEditors: WangWen
 * @email: bear393048@163.com
 * @Date: 2019-04-04 09:40:41
 * @LastEditTime: 2019-04-04 14:06:26
 */


/**
 * @version: 1.0
 * @description: 基础构造器
 * @param : model, year, price
 * @return: {}
 */
function Car(model, year, price) {

    this.model = model;
    this.year = year;
    this.price = price;

    this.toString = function () {
        return this.year + ' 年生产 ' + this.model + " 售价 " + this.price + " 人民币";
    };
}

// 使用:

// 我们可以示例化一个Car
let civic = new Car("Honda Civic", 2018, 150000);
let mondeo = new Car("Ford Mondeo", 2018, 200000);

// 打开浏览器控制台查看这些对象toString()方法的输出值
// output of the toString() method being called on
// these objects
console.log(civic.toString());
console.log(mondeo.toString());


//上面这是个简单版本的构造器模式，但它还是有些问题。
//一个是难以继承，另一个是每个Car构造函数创建的对象中，toString()之类的函数都被重新定义。
//这不是非常好，理想的情况是所有Car类型的对象都应该引用同一个函数。

/**
 * @version: 1.0
 * @description: 使用“原型”的构造器
 * @param : model, year, pricecd
 * @return: {}
 */
function Car(model, year, price) {

    this.model = model;
    this.year = year;
    this.price = price;

}

// 注意这里我们使用Note here that we are using Object.prototype.newMethod 而不是
// Object.prototype ，以避免我们重新定义原型对象
Car.prototype.toString = function () {
    return this.year + ' 年生产 ' + this.model + " 售价 " + this.price + " 人民币";
};

// 使用:

let axela = new Car("Mazda Axela", 2018, 115000);
let excelle = new Car("Bulck ExcelleGT", 2019, 89000);

console.log(axela.toString());
console.log(excelle.toString());

//单个toString()实例被所有的Car对象所共享了。
