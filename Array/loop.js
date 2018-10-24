/**
 *
 * @author WangWen 2018年10月23日
 * Description:数组的循环遍历的方法 
 * @Param {	array:'原始数组' }
 * @Return { array.item:'数组遍历值' }
 * @Version 1.0
 * 
 * */


/*	
 * 1.for循环
 * 
 * */
let forLoop = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
}

/**
 * *
 * 	2.forEach()	回调函数中传入三个参数(1.value:当前遍历节点的元素值,2.index:当前遍历节点的索引,3.array:原始数组)
 * 
 * */

let forEachLoop = (arr) => {
	arr.forEach((value,index,array) => {
		console.log(value)    //数组的元素值
		console.log(indx)     //元素值对应的索引
		console.log(array)    //原始数组
	})
}

/**
 * *
 * 3.map()	回调函数中传入三个参数(1.value:当前遍历节点的元素值,2.index:当前遍历节点的索引,3.array:原始数组)
 * 
 * */

let mapLoop = (arr) => {
	arr.map((value,index,array) => {
		console.log(value)    //数组的元素值
		console.log(indx)     //元素值对应的索引
		console.log(array)    //原始数组
	})
}

/**
 * *
 * 4.filter()	回调函数中传入三个参数(1.value:当前遍历节点的元素值,2.index:当前遍历节点的索引,3.array:原始数组)
 * 
 * */

let filterLoop = (arr) => {
	arr.filter((value,index,array) => {
		console.log(value)    //数组的元素值
		console.log(indx)     //元素值对应的索引
		console.log(array)    //原始数组
	})
}

/**
 * *
 * 5.some()	回调函数中传入三个参数(1.value:当前遍历节点的元素值,2.index:当前遍历节点的索引,3.array:原始数组)
 * 
 * */

let someLoop = (arr) => {
	arr.some((value,index,array) => {
		console.log(value)    //数组的元素值
		console.log(indx)     //元素值对应的索引
		console.log(array)    //原始数组
	})
}

/**
 * *
 * 6.every()	回调函数中传入三个参数(1.value:当前遍历节点的元素值,2.index:当前遍历节点的索引,3.array:原始数组)
 * 
 * */

let everyLoop = (arr) => {
	arr.every((value,index,array) => {
		console.log(value)    //数组的元素值
		console.log(indx)     //元素值对应的索引
		console.log(array)    //原始数组
	})
}

/**
 * *
 *	7.reduce()	回调函数中传入四个参数(1.previous:当前遍历节点元素的前一个元素值,2.previous:当前遍历节点的元素值,3.indx:当前遍历节点的索引,4.array:原始数组)
 *
 */

let reduceLoop = (arr) => {
	arr.reduce((previous, current, index, array) => {
		console.log(previous)    	//数组的当前元素的前一个元素值
		console.log(previous)    	//数组的当前元素值
		console.log(indx)     		//元素值对应的索引
		console.log(array)    		//原始数组
	})
}

/**
 * *
 *	8.for in循环
 *
 */

let forinLoop = (arr) => {
	for (let v in arr) {
		console.log(v)       //数组当前元素的索引值
		console.log(arr[v])	 //数组当前元素的值
	}
}

/**
 * *
 *	9.for of 循环(ES6语法)
 *
 * */

let forofLoop = (arr) => {
	for (let v of arr) {
		console.log(v)   //数组遍历的当前值
	}
}
