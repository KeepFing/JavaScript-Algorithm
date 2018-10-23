let area = require('./area.js').area	//引入省市区的json格式的文件

/**
 * 传入选择的省，返回该省下的市列表
 * 
 * **/
let selectProvice = (provice)=>{
	for (let v of area) {
		if (v.name == provice) {
			return v.city
		}
	}
}

/**
 * 传入省、市
 * 返回该省、市下的县(区)列表
 * 
 * **/


let selectCity = (provice,city)=>{
	for (let v of selectProvice(provice)) {
		if (v.name == city) {
			return v.area
		}
	}
}
