var blnOur = false;
var arrOurDomain = ["",""]
var strLocation = document.referrer;
if(top!=window){
	for (var j=0;j<arrOurDomain.length;j++){
		if(strLocation.indexOf(arrOurDomain[j])>=0){
			blnOur = true;
			break;
		}
	}
}
if(!blnOur){
	
}