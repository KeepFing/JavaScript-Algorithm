/*
 *	JavaScript中位数的算法描述
 * @parmas(arr)	
 * 
 * 	一.算法解析
 * 		(如果传入的数组的长度是1，即数组中只有一个元素，则直接返回该数组中的数据)
 * 	1.将传入的数组排序得到一个新的数组(参照sort.js算法)
 * 	2.数组长度除以2，如果得到整数，则返回数组下标为(长度/2)和(长度/(2-1))的值的平均数
 * 	      数组长度除以2，如果得到不是整数，则返回数组下标为(长度/2取整)值
 * 
 * 
 * 	testArr = [1,2,3]
 * 	return 2
 * */

import sort from 'sort.js'

let median = (arr)=>{
	
	let len = arr.length
	
	if (len == 1) {
		return arr[0]
	}
	
	arr = sort.bubbleSort(arr)		//将传入的数组进行排序
	
	if (len%2 == 0) {
		
		return (arr[len/2] + arr[len/2-1])/2
		
	}else{
		
		return arr[Math.floor(len/2)]
	}
}
