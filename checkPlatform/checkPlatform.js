/**
 *
 * @author WangWen 2018年10月23日
 * Description: 判断当前运行环境是PC还是移动端 
 * @Param { navigator.userAgent }
 * @Return {}
 * @Version 1.0
 * 
 * */

function isPcPlat(userAgent){
	if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgent)) {
        return false;
    } else {
        return true;
    }
}

function isWx(userAgent){
	if (userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
		return true;
	}else{
		return false;
	}
}