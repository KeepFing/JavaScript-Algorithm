/**
 * 
 * 判断数组中是否存在指定的元素
 * 
 * 	parmas:(arr:原始数组,value:需要查找的指定元素)
 * 
 * */

/*
 *	1.for循环查找
 * 
 * */

let foo = (arr,value)=>{
	if (arr.length == 0) {
		throw new Error("This array is empty,please Change the array");
	}else if(arr.length == 1){
		arr[0] == value ? true : false
	}else{
		for (let v of arr) {
			v == value ? true : false
		}
	}
}

/**
 * 
 * 2.indexOf()方法
 * 
 * */

let foo1 = (arr,value) => {
	if (arr.length == 0) {
		throw new Error("This array is empty,please Change the array");
	}else if(arr.length == 1){
		arr[0] == value ? true : false
	}else{
		arr.indexOf(value) == -1 ? false : true
	}
}

