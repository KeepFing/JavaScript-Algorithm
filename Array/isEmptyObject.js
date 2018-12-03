/**
 *
 * @author WangWen 2018年10月23日
 * Description 判断JavaScript空对象 
 * @Param { object }
 * @Return { boolean : { true : '空对象' , false : '非空对象'}}
 * @Version 1.0
 * 
 * */

//1.for...in...遍历属性，为真则为“非空对象”；否则为“空对象”

let isEmptyObjcet1 = (obj) => {
	
	for (let attr in obj) {
		
		return false
		
	};
	
	return true;
	
}

//2.通过JSON自带的.stringify方法来判断

let isEmptyObjcet2 = (obj) => {
	
	JSON.stringify(obj) === '{}' ? return true : return false;
	
}

//3.ES6新增的方法Object.keys()

let isEmptyObjcet3 = (obj) => {
	
	Object.keys(obj).length === 0 return true : return false;
	
}






