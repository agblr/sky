var ON = "on";

function legendLoadOver(){
	document.getElementById(LGlobal.id+"_inittxt").innerHTML="";
}
function addChild(DisplayObject){
	DisplayObject.parent = "root";
	LGlobal.childList.push(DisplayObject);
}
function removeChild(DisplayObject){
	for(var i=0;i<LGlobal.childList.length;i++){
		if(DisplayObject.objectindex == LGlobal.childList[i].objectindex){
			if(DisplayObject.die)DisplayObject.die();
			LGlobal.childList.splice(i,1);
			break;
		}
	}
}
function init(speed,canvasname,width,height,func){
	LEvent.addEventListener(window,"load",function(){
		setInterval(function(){LGlobal.onShow();}, speed);
		LGlobal.setCanvas(canvasname,width,height);
		func();
	});
}

function base(derive,baseSprite,baseArgs){
	baseSprite.apply(derive,baseArgs);
	for(prop in baseSprite.prototype){
		var proto = derive.constructor.prototype;
		if(!proto[prop]){
			proto[prop] = baseSprite.prototype[prop];
		}
		proto[prop]["super"] = baseSprite.prototype;
	}
}