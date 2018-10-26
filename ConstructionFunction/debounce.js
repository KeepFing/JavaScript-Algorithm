/**
 *
 * @author WangWen 2018年10月23日
 * Description:js函数的去抖 
 * @Param {	method:执行的函数	delay:间隔时间 }
 * @Return { object }
 * @Version 1.0
 * 
 * */
function debounce(method, delay) {
	var timer = null;
	return function() {
		var context = this,
			args = arguments;
		clearTimeout(timer);
		timer = setTimeout(function() {
			method.apply(context, args);
		}, delay);
	}
}