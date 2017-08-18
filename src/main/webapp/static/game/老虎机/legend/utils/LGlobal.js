var LGlobal = function (){}
LGlobal.type = "LGlobal";
LGlobal.canvas = null;
LGlobal.width = 0;
LGlobal.height = 0;
LGlobal.objectIndex = 0;
LGlobal.childList = new Array();
LGlobal.buttonList = new Array();
LGlobal.setCanvas = function (id,width,height){
	LGlobal.canTouch = false;
	LGlobal.os = "pc";
	if (navigator.userAgent.indexOf('iPhone') > 0) {
		LGlobal.os = "iPhone";
		LGlobal.canTouch = true;
	}else if (navigator.userAgent.indexOf('iPod') > 0) {
		LGlobal.os = "iPod";
		LGlobal.canTouch = true;
	}else if (navigator.userAgent.indexOf('iPad') > 0) {
		LGlobal.os = "iPad";
		LGlobal.canTouch = true;
	}else if (navigator.userAgent.indexOf('Android') > 0) {
		LGlobal.os = "Android";
		LGlobal.canTouch = true;
	}
	LGlobal.id = id;
	LGlobal.window = window;
	LGlobal.object = document.getElementById(id);
	LGlobal.object.innerHTML='<div id="' + LGlobal.id + '_inittxt" style="position:absolute;margin:0px 0px 0px 0px;width:'+width+'px;height:'+height+'px;">onloading……</div>' + 
	'<div style="position:absolute;margin:0px 0px 0px 0px;width:'+width+'px;height:'+height+'px;z-index:0;"><canvas id="' + LGlobal.id + '_canvas">'+
	'<div id="noCanvas">'+
	"<p>Hey there, it looks like you're using Microsoft's Internet Explorer. Microsofthates the Web and doesn't support HTML5 :(</p>"+ 
	'<p>'+ 
		'To play this game you need a good Browser, like'+ 
		'<a href="http://www.opera.com/">Opera</a>,'+ 
		'<a href="http://www.google.com/chrome">Chrome</a>,'+ 
		'<a href="http://www.mozilla.com/firefox/">Firefox</a> or'+ 
		'<a href="http://www.apple.com/safari/">Safari</a>.'+ 
	'</p>'+  
	'</div>'+  
	'</canvas></div>'+
	'<div id="' + LGlobal.id + '_InputText" style="position:absolute;margin:0px 0px 0px 0px;z-index:10;display:none;"><textarea rows="1" id="' + LGlobal.id + '_InputTextBox" /></div>';

	LGlobal.canvasObj = document.getElementById(LGlobal.id+"_canvas");
	LGlobal.inputBox = document.getElementById(LGlobal.id + '_InputText');
	LGlobal.inputTextBox = document.getElementById(LGlobal.id + '_InputTextBox');
	LGlobal.inputTextField = null;
	if(width)LGlobal.canvasObj.width = width;
	if(height)LGlobal.canvasObj.height = height;
	LGlobal.width = LGlobal.canvasObj.width;
	LGlobal.height = LGlobal.canvasObj.height;
	LGlobal.canvas = LGlobal.canvasObj.getContext("2d");
	LGlobal.offsetX = 0;
	LGlobal.offsetY = 0;
    //LGlobal.canvas.scale(-1,1);
	//LGlobal.canvas.translate(LGlobal.width/2,LGlobal.height/2); 
    //LGlobal.canvas.rotate(-Math.PI/8);
    if(LGlobal.canTouch){
        LEvent.addEventListener(LGlobal.canvasObj,LMouseEvent.TOUCH_START,function(event){
    		if(LGlobal.inputBox.style.display != "none"){
    			LGlobal.inputTextField.text = LGlobal.inputTextBox.value;
    			LGlobal.inputBox.style.display = "none";
    		}
    		var eve = {offsetX:event.touches[0].pageX,offsetY:event.touches[0].pageY};
        	LGlobal.offsetX = eve.offsetX;
        	LGlobal.offsetY = eve.offsetY;
        	LGlobal.mouseEvent(eve,LMouseEvent.MOUSE_DOWN);
        	LGlobal.touchHandler(event);
    	});
	    LEvent.addEventListener(document,LMouseEvent.TOUCH_END,function(event){
    		var eve = {offsetX:LGlobal.offsetX,offsetY:LGlobal.offsetY};
        	LGlobal.mouseEvent(eve,LMouseEvent.MOUSE_UP);
        	LGlobal.touchHandler(event);
    	});
        LEvent.addEventListener(document,LMouseEvent.TOUCH_MOVE,function(event){
    		var eve = {offsetX:event.touches[0].pageX,offsetY:event.touches[0].pageY};
        	LGlobal.mouseMoveEvent = eve;
        	
        	LGlobal.offsetX = eve.offsetX;
        	LGlobal.offsetY = eve.offsetY;
        	LGlobal.mouseEvent(eve,LMouseEvent.MOUSE_MOVE);
        	LGlobal.touchHandler(event);
    	});
    	
    }else{
        LEvent.addEventListener(LGlobal.canvasObj,LMouseEvent.MOUSE_DOWN,function(event){
    		if(LGlobal.inputBox.style.display != "none"){
    			LGlobal.inputTextField.text = LGlobal.inputTextBox.value;
    			LGlobal.inputBox.style.display = "none";
    		}
    		
        	LGlobal.mouseEvent(event,LMouseEvent.MOUSE_DOWN);
    	});
        LEvent.addEventListener(LGlobal.canvasObj,LMouseEvent.MOUSE_MOVE,function(event){
        	LGlobal.mouseMoveEvent = event;
        	
        	LGlobal.offsetX = event.offsetX;
        	LGlobal.offsetY = event.offsetY;
        	LGlobal.mouseEvent(event,LMouseEvent.MOUSE_MOVE);
    	});
        LEvent.addEventListener(LGlobal.canvasObj,LMouseEvent.MOUSE_UP,function(event){
        	LGlobal.mouseEvent(event,LMouseEvent.MOUSE_UP);
    	});
        LEvent.addEventListener(LGlobal.canvasObj,LMouseEvent.MOUSE_OUT,function(event){
        	LGlobal.mouseEvent(event,LMouseEvent.MOUSE_OUT);
    	});
    }
} 
LGlobal.touchHandler = function(event){
	event.stopPropagation();
	event.preventDefault();
	if(event.stopImmediatePropagation){
		event.stopImmediatePropagation();
	}
	return event;
}
LGlobal.mouseEvent = function(event,type){
	var key;
	for(key in LGlobal.childList){
		if(LGlobal.childList[key].mouseEvent){
			LGlobal.childList[key].mouseEvent(event,type);
		}
	}
}
LGlobal.onShow = function (){
	if(LGlobal.canvas == null)return;
    LGlobal.canvas.clearRect(0,0,LGlobal.width,LGlobal.height);
	
	LGlobal.buttonShow(LGlobal.buttonList);
    
	LGlobal.show(LGlobal.childList);
}
LGlobal.buttonShow = function(buttonlist){
	var key;
	for(key in buttonlist){
		if(buttonlist[key].buttonModeChange){
			buttonlist[key].buttonModeChange();
		}
   }
}
LGlobal.show = function(showlist,cood){
	if(cood == null)cood={x:0,y:0};
	var key;
	for(key in showlist){
		if(showlist[key].show){
			showlist[key].show(cood);
		}
	}
}

LGlobal.divideCoordinate = function (w,h,row,col){
	var i,j;
	var cWidth = w/col;
	var cHeight = h/row;
	var resultArray = new Array();
	for(i=0;i<row;i++){
		var childArray=new Array();
		for(j=0;j<col;j++){
			childArray.push({x:cWidth*j,y:cHeight*i});
		}
		resultArray.push(childArray);
	}
	return resultArray;
}