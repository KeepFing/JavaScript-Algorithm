/*
 * 关于数组去重的方法
 * 首先这里介绍两种方法，第一种是传统的利用for循环+indexOf()方法产生一个新的没有重复元素的数组
 * 第二是利用ES6的新的Set对象+Array.from()方法得到一个没有重复元素的数组
 * Set对象是ES6中新增的类型，可以自动排除重复项，生成Set对象后，可以轻松遍历它所包含的内容
 * Array.from方法可以将 Set 结构转为数组
 * 下面封装两种方法：
 * 
 * 
 * */
/*
 * 传统for循环的方法:
 * 1.先定义一个新的空数组类接收去重后的数组
 * 2.循环遍历原数组，判断新数组里面是否包含元素组的元素，如果不包含则将原数组的元素push到新数组，否则不执行
 * 3.返回的新数组就是去重后的数组
 */
let foo = (arr) => {
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		if(newArr.indexOf(arr[i]) == -1) {
			newArr.push(arr[i]);
		}
	}
	return newArr
};
/*
 * 利用Set对象的方法:
 * 1.利用Set对象将原数组的元素加入到Set对象中，Set对象中的value值就是去重过后的值，因为Set对象可以自动排除重复项
 * 2.用Array.from()方法将Set对象转换成普通的Array对象
 * 
 * */
let set = (arr) => {
	return Array.from(new Set(arr))
};

/*
 * 看起来利用ES6的Set对象的代码量少了许多
 * 最终还是需要测试他们的运行效率
 * 
 * 这里写一个方法，用于生成一个随机数，然后将这些随机数push到数组中，需要测试百万级别数据量
 */
let MathRand = () => {
	var Num = "";
	for(var i = 0; i < 6; i++) {
		Num += Math.floor(Math.random() * 10);
	}
	return Num;
}



let createArray = () => {
	let arr = []
	for(var i=0;i<1000000;i++){
		arr.push(MathRand())
	}
	return arr
}

/*
 * 现在可以进行测试了，首先需要在程序开始之前记录当前的时间,
 * 在程序结束之后记录一下时间
 * 最终我们可以得到程序的运行时间
 * 首先测试传统for循环
 * */

var myDateStart = new Date()
console.log('开始时间',myDateStart.getSeconds()+'-'+myDateStart.getMilliseconds())

foo(createArray())

var myDateEnd = new Date()
console.log('结束时间',myDateEnd.getSeconds()+'-'+myDateEnd.getMilliseconds())

//程序运行时间2.5s
//接下来测试Set对象方法

var myDateStart = new Date()
console.log('开始时间',myDateStart.getSeconds()+'-'+myDateStart.getMilliseconds())

set(createArray())

var myDateEnd = new Date()
console.log('结束时间',myDateEnd.getSeconds()+'-'+myDateEnd.getMilliseconds())

//程序运行时间 153ms

/*
 * 在百万级别的数据下，利用Set的效率比传统的for循环的效率高出了20倍
 * 
 * 
 * 其他应用场景，在判断数组中是否有重复数组也可以用这种方法来判断新数组和原数组的长度是否一致，如果原数组比新数组长，那么原数组中的元素必定有重复项
 * 
 * */


