function LBitmap(bitmapdata){
	var self = this;
	self.objectindex = ++LGlobal.objectIndex;
	self.type = "LBitmap";
	self.x = 0;  
	self.y = 0;  
	self.width = 0;  
	self.height = 0;  
	self.scaleX=1;
	self.scaleY=1;
	self.alpha = 1;
	self.visible=true;
	self.rotate = 0;
	self.bitmapData = bitmapdata; 
	if(self.bitmapData){
		self.width = self.bitmapData.width;
		self.height = self.bitmapData.height;
	}
}
LBitmap.prototype = {
	show:function (cood){
		if(cood==null)cood={x:0,y:0};
		var self = this;
		if(!self.visible)return;
		if(self.rotate != 0){
			var rx,ry ;
			rx = cood.x + self.x+self.bitmapData.width*self.scaleX/2;
			ry = cood.y + self.y+self.bitmapData.height*self.scaleY/2;
			LGlobal.canvas.save();  
			LGlobal.canvas.translate( rx, ry); 
			LGlobal.canvas.rotate(self.rotate * Math.PI / 180);
			LGlobal.canvas.translate(0-rx,0-ry); 
			if(self.alpha < 1){ 
				LGlobal.canvas.globalAlpha = self.alpha;
			}
			LGlobal.canvas.drawImage(self.bitmapData.image,
					self.bitmapData.x,self.bitmapData.y,self.bitmapData.width,self.bitmapData.height,
					cood.x + self.x ,cood.y + self.y ,self.width*self.scaleX,self.height*self.scaleY);
			LGlobal.canvas.restore();  
		}else{
			if(self.alpha < 1){
				LGlobal.canvas.save();  
				LGlobal.canvas.globalAlpha = self.alpha;
			}
			LGlobal.canvas.drawImage(self.bitmapData.image,
				self.bitmapData.x,self.bitmapData.y,self.bitmapData.width,self.bitmapData.height,
				cood.x + self.x,cood.y + self.y,self.width*self.scaleX,self.height*self.scaleY);
			if(self.alpha < 1){
				LGlobal.canvas.restore(); 
			}
		}
	},
	ismouseon:function(event,cood){
		var self = this;
		if(cood==null)cood={x:0,y:0};
		if(event==null || event == "undefined")return false;
		var ox,oy;
		if(event.offsetX == "undefined"){
			ox = event.touches[0].pageX;
			oy = event.touches[0].pageY;
		}else{
			ox = event.offsetX;
			oy = event.offsetY;
		}
		if(event.offsetX >= self.x + cood.x && ox <= self.x + cood.x + self.bitmapData.width*self.scaleX && 
			event.offsetY >= self.y + cood.y && oy <= self.y + cood.y + self.bitmapData.height*self.scaleY){
			return true;
		}else{
			return false;
		}
	},
	getWidth:function(){
		var self = this;
		return self.bitmapData != null?self.bitmapData.width*self.scaleX:0;
	},
	getHeight:function(){
		var self = this;
		return self.bitmapData != null?self.bitmapData.height*self.scaleY:0;
	}
}