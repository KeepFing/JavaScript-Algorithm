let area = require('./area.js').area


let selectProvice = (provice)=>{
	for (let v of area) {
		if (v.name == provice) {
			return v.city
		}
	}
}

let selectCity = (provice,city)=>{
	for (let v of selectProvice(provice)) {
		if (v.name == city) {
			return v.area
		}
	}
}

console.log(selectCity('四川省','巴中市'))