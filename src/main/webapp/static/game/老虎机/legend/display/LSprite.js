function LSprite(){
	var self = this;
	self.objectindex = ++LGlobal.objectIndex;
	self.type = "LSprite";
	self.x = 0;
	self.y = 0;
	self.alpha = 1;
	self.visible=true;
	self.childList = new Array()
	self.frameList = new Array();
	self.mouseList = new Array();
	self.graphics = new LGraphics();
	self.graphics.parent = self;
}

LSprite.prototype = {
	show:function (cood){
		if(cood==null)cood={x:0,y:0};
		var self = this;
		if(!self.visible)return;
		self.graphics.show({x:self.x+cood.x,y:self.y+cood.y});
		if(self.alpha < 1){
			LGlobal.canvas.save();  
			LGlobal.canvas.globalAlpha = self.alpha;
		}
		LGlobal.show(self.childList,{x:self.x+cood.x,y:self.y+cood.y});
		if(self.alpha < 1){
			LGlobal.canvas.restore(); 
		}
		self.loopframe();
	},
	loopframe:function (){
		var self = this;
		var key;
		for(key in self.frameList){
			self.frameList[key]();
		}
	},
	addChild:function (DisplayObject){
		var self  = this;
		DisplayObject.parent = self;
		self.childList.push(DisplayObject);
	},
	removeChild:function(DisplayObject){
		var self  = this;
		for(var i=0;i<self.childList.length;i++){
			if(DisplayObject.objectindex == self.childList[i].objectindex){
				if(DisplayObject.die)DisplayObject.die();
				self.childList.splice(i,1);
				break;
			}
		}
	},
	removeAllChild:function(){
		var self  = this;
		for(var i=0;i<self.childList.length;i++){
			if(self.childList[i].die)self.childList[i].die();
		}
		self.childList.splice(0,self.childList.length);
	},
	addEventListener:function (type,listener){
		var self = this;
		if(type == LEvent.ENTER_FRAME){
			self.frameList.push(listener);
		}else if(type.indexOf("mouse")>=0){
			self.mouseList.push({listener:listener,type:type});
		}else if(type.indexOf("touch")>=0){
			self.mouseList.push({listener:listener,type:type});
		}
	},
	removeEventListener:function (type,listener){
		var self = this;
		var i,length = self.frameList.length;
		for(i=0;i<length;i++){
			if(type == LEvent.ENTER_FRAME && self.frameList[i] == listener){
				self.frameList.splice(i,1);
				break;
			}
		}
		length = self.mouseList.length;
		for(i=0;i<length;i++){
			if(type == self.mouseList[i].type && self.mouseList[i].listener == listener){
				self.mouseList.splice(i,1);
				break;
			}
		}
	},
	mouseEvent:function (event,type,cood){
		if(event==null || event == "undefined")return false;
		if(cood==null)cood={x:0,y:0};
		var self = this;
		var isok;
		var ox,oy;
		if(event.offsetX == "undefined"){
			ox = event.touches[0].pageX;
			oy = event.touches[0].pageY;
		}else{
			ox = event.offsetX;
			oy = event.offsetY;
		}
		for(key in self.childList){
			if(self.childList[key].mouseEvent){
				isok = self.childList[key].mouseEvent(event,type,{x:self.x+cood.x,y:self.y+cood.y});
				if(isok)return true;
			}
		}
		if(self.mouseList.length == 0){
			return false;
		}
		var key;
		var isclick = self.ismouseon(event, cood);
		if(isclick){
			for(key in self.mouseList){
				var obj = self.mouseList[key];
				if(obj.type == type){
					event.selfX = ox - (self.x+cood.x);
					event.selfY = oy - (self.y+cood.y);
					event.currentTarget = self;
					
					//alert("event.currentTarget.type="+event.currentTarget.type+self.type);
					obj.listener(event,self);
					return true;
				}
			}
			return false;
		}else{
			return false;
		}
		
	},
	ismouseon:function(event,cood){
		var self = this;
		if(!self.visible || event==null )return false;
		var key;
		var isclick = false;
		for(key in self.childList){
			if(self.childList[key].ismouseon)isclick = self.childList[key].ismouseon(event,{x:self.x+cood.x,y:self.y+cood.y});
			if(isclick)break;
		}
		if(!isclick && self.graphics){
			isclick = self.graphics.ismouseon(event,{x:self.x+cood.x,y:self.y+cood.y});
		}
		return isclick;
	},
	die:function (){
		var self = this;
		self.frameList.splice(0,self.frameList.length);
		self.mouseList.splice(0,self.mouseList.length);
		var key;
		for(key in self.childList){
			if(self.childList[key].die)self.childList[key].die();
		}
	}
}