/**
 *
 * @author WangWen 2018年10月23日
 * Description:获取数组的最大值和最小值 
 * @Param {	arr:原始数组 	}
 * @Return { max:最大值, min:最小值}
 * @Version 1.0
 * 
 * */

/*	算法一 :	Math.max(),Math.min(),apply()函数	*/

let getMaxMin = (arr, type) => {
	
	if(type == 'max') {
		
		return Math.max.apply(null, arr)
	
	} else if(type == 'min') {
	
		return Math.min.apply(null, arr)
	
	} else {
		
		throw new Error('参数错误')
	
	}
}

/*	算法二:	假设数组第一个为最大（或最小值），和后边进行比较，若后边的值比最大值大（或比最小值小），则替换最大值（或最小值）*/

let getMaxMin = (arr,type) => {
	if(type == 'max') {
		
		let max = arr[0]
		
		for (let v of arr) {
			if (max < v) {
				
				max = v
			}
		}
		
		return max
		
	} else if(type == 'min') {
		
		let min = arr[0]
		
		for (let v of arr) {
			if (min > v) {
				
				min = v
			}
		}
		
		return max
		
	} else {
		
		throw new Error('参数错误')
		
	}
}

/*	算法三:	利用toString和join把数组转换为字符串，再和Math的max和min方法分别进行拼接，最后执行eval方法	*/

let getMaxMin = (arr, type) => {
	
	if(type == 'max') {
		
		return eval("Math.max("+ arr.toString() +")")
		
		//或者
		
		//return eval("Math.max("+ arr.join() +")")
	
	} else if(type == 'min') {
	
		return eval("Math.min("+ arr.toString() +")")
		
		//或者
		
		//return eval("Math.min("+ arr.join() +")")
	
	} else {
		
		throw new Error('参数错误')
	
	}
}

/*	算法四:	将数组升序(或降序)排序,第一位元素(最后一位元素)为最小值,最后一位元素(第一位元素)为最大值	*/


/***
 * *
 * 
 * TODO
 * 
 * */