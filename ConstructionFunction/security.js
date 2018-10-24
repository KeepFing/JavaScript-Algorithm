/**
 *
 * @author WangWen 2018年10月23日
 * Description:构造函数在初始化中存在的安全性 
 * @Param {	brand:'品牌' , date:'时间' }
 * @Return { new Person}
 * @Version 1.0
 * 
 * */

function Phone(brand,date){
	
	this.brand = brand;
	
	this.date = date;
	
};

/**	当实例化上面的构造函数，没有带上new字符，会将brand赋值到全局的window对象中，在实例化的对象中返回undefined
 *	只有在new新的对象中能将brand、date赋值到新的对象中	
 * */
let smartisan = Phone('Smartisan','2018-02-01');

console.log(smartisan); 		//输出 "undefined"

console.log(window.brand);	//输出"Smartisan"


/**
 * *
 *	构造函数的优化
 * 
 * 	上述代码中，没有使用new关键字，导致了构造函数中的this指向了最外层的window对象，使用new关键字调用构造函数时this指向新创建的对象，即Smartisan对象
 *作用域安全的构造函数会先对确认this指向的正确性，避免修改全局的name属性
 * 
 * 	提高代码的健壮性，在不使用new关键字时，避免将this的指针指向window对象
 *
 */

function Phone(brand,date){
	
	if (this instanceof Phone) {
		
		this.brand = brand;
		
		this.date = date;
		
	}else{
		
		return new Phone(brand,date);
	
	};
};

let smartisan = Phone('smartisan','2018-02-01');

console.log(smartisan.brand);	//输出'smartisan'
