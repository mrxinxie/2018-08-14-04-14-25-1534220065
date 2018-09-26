module.exports = function main(num) {
	/*
		可以简单将数字分成上、中、下三排，分别进行输出
		每排出现的图形与数字是对应的且可能出现一个图形对应多个数字
	*/
	var o1 = '' , o2 = '' , o3 = '';
	for(i = 0; i < num.length; i++){
		//最上面一排的图形，因为只有两种图形可能，用if语句显得更简洁
		if(parseInt(num[i]) === 1 || parseInt(num[i]) === 4){
			o1 = o1 + '... ';
		}else{
			o1 = o1 + '._. ';
		}
		//中间部分的图形，因为图形种类较多，用switch语句更适合
		switch(parseInt(num[i])){
			case 0:
			o2 = o2 + '|.| ';
			break;
			case 1:
			case 7:
			o2 = o2 + '..| ';
			break;
			case 2:
			case 3:
			o2 = o2 + '._| ';
			break;
			case 4:
			case 8:
			case 9:
			o2 = o2 + '|_| ';
			break;
			case 5:
			case 6:
			o2 = o2 + '|_. ';
			break;
		}
		//最下面一排的图形，因为图形种类较多，用switch语句更适合
		switch(parseInt(num[i])){
			case 0:
			case 6:
			case 8:
			o3 = o3 + '|_| ';
			break;
			case 1:
			case 4:
			case 7:
			case 9:
			o3 = o3 + '..| ';
			break;
			case 2:
			o3 = o3 + '|_. ';
			break;
			case 3:
			case 5:
			o3 = o3 + '._| ';
			break;
		}
		//将每排最后一位空格替换成换行符
		if (i === num.length - 1){
			o1 = o1.substring(0 , o1.length - 1) + '\n';
			o2 = o2.substring(0 , o2.length - 1) + '\n';
			o3 = o3.substring(0 , o3.length - 1) + '\n';
		}
	}
    return o1+o2+o3;
};