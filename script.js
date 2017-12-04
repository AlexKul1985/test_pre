var fs = require('fs');

var text = fs.readFileSync('1.txt');






function Conv(str){
	var flag = true;
	var selectors = "";
	var arr_sel = [];
	var styles = "";
	var arr_styles = [];
	var str = str.toString();
	var arr_str = str.trim().split('\r\n');
	for( var i = 0; i < arr_str.length; i++ ){
		if(arr_str[i].length == 0) continue;

		for(var j = arr_str[i].length-1; j >= 0; j--){
			if(flag){
				if(arr_str[i][j] !== "_") continue;
				else { flag = false; }
				
			}
			else {
				selectors += arr_str[i][j];
			}
		}
		for( var k = arr_str[i].length-1; k >=0; k-- ){
			if(arr_str[i][k] == "_") break;
			styles +=arr_str[i][k];
		}
		selectors = selectors.split("").reverse().join("");	
		styles = styles.split("").reverse().join("");	
		arr_sel.push(selectors);		
		arr_styles.push(styles);		
		flag = true;
		selectors = "";
		styles = "";

	}
	var result_str = "";
	for(var m = 0; m < arr_sel.length; m++){
		result_str += arr_sel[m] + ' { '+ arr_styles[m] + ' }\r\n'; 
	}
	
	return result_str;

}
// var out = Conv(text);
// console.log(out);

fs.writeFileSync('style.css',Conv(text));
