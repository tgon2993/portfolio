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
    let new_date = new Date(strDate1); //Create a new date object. Default is the current time
	let old_date = new Date(strDate2); //Sets a time point in the past，"yyyy-MM-dd HH:mm:ss"Formatting date
	
	let difftime = (new_date - old_date)/1000; //Calculate the time difference and convert milliseconds to seconds
	
	let days = parseInt(difftime/86400); // Day  24*60*60*1000 
    let hours = parseInt(difftime/3600)-24*days;    // Hours 60 * 60 Total hours - Past hours = present hours
    let minutes = parseInt(difftime%3600/60); // Minutes -(day*24) Take 60 seconds as a full portion, take the remainder, the number of seconds left, seconds /60 is the number of minutes  
    let seconds = parseInt(difftime%60);  // Take the remainder of the 60-second portion, the number of seconds left

    let diffTim = days+"days,"+hours+"hours";
    if(days <= 0 && hours <= 0){
        return "0day,0hour" ;
    }
   	//alert("time difference is: " + diffTim);	
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
