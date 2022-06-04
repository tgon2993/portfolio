Date.prototype.format =function(format){

    let o = {

            "M+" : this.getMonth()+1, //month
            "d+" : this.getDate(), //day
            "h+" : this.getHours(), //hour
            "m+" : this.getMinutes(), //minute
            "s+" : this.getSeconds(), //second
            "q+" : Math.floor((this.getMonth()+3)/3), //quarter
            "S" : this.getMilliseconds() //millisecond
    }

    if(/(y+)/.test(format)) {
        format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4- RegExp.$1.length));
    }

    for(let k in o){
        if(new RegExp("("+ k +")").test(format))
            format = format.replace(RegExp.$1,RegExp.$1.length==1? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
    }

    return format;

}

function diffTime(strDate1,strDate2){
    let new_date = new Date(strDate1); //新建一个日期对象，默认现在的时间
	let old_date = new Date(strDate2); //设置过去的一个时间点，"yyyy-MM-dd HH:mm:ss"格式化日期
	
	let difftime = (new_date - old_date)/1000; //计算时间差,并把毫秒转换成秒
	
	let days = parseInt(difftime/86400); // 天  24*60*60*1000 
    let hours = parseInt(difftime/3600)-24*days;    // 小时 60*60 总小时数-过去的小时数=现在的小时数 
    let minutes = parseInt(difftime%3600/60); // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
    let seconds = parseInt(difftime%60);  // 以60秒为一整份 取余 剩下秒数

    let diffTim = days+"days,"+hours+"hours";
    if(days < 0 && hours < 0){
        return "0day,0hour" ;
    }
   	//alert("时间差是: " + diffTim);	
    return diffTim ;
}

function isDate(strDate) {
    const dateReg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;
    if(!dateReg.test(strDate)){
        return false;
    }

    let dateArr = strDate.split("-");
    if(dateArr.length != 3){
        return false;
    }
    let YYYY = dateArr[0] - 0;
    let MM = dateArr[1]- 0 ;
    let DD = dateArr[2] - 0;
    if (!(MM >= 1 && MM <= 12)) {
        
        return false;
    }
    switch (MM) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (!(DD >= 1 && DD <= 31)) {
                alert("Illegal date ");
                return false;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (!(DD >= 1 && DD <= 30)) {
                alert("Illegal date ");
                return false;
            }
            break;
        case 2:
            if (!(DD >= 1 && DD <= 29)) {
                alert("Illegal date ");
                  return false;
            }
    }
    return true ;
}
