function LGraphics(){
	var self = this;
	self.objectindex = ++LGlobal.objectIndex;
	self.type = "LGraphics";
	self.color = "#000000";
	self.i = 0;
	self.alpha = 1;
	self.setList = new Array();
	self.showList = new Array();
}

LGraphics.prototype = {
	show:function (cood){
		if(cood==null || cood == "undefined")cood={x:0,y:0};
		var self = this;
		if(self.setList.length == 0)return;
		var key;
		for(key in self.setList){
			self.setList[key](cood.x,cood.y);
		}
	},
	lineWidth:function (thickness){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.lineWidth = thickness;});
	},
	strokeStyle:function (color){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.strokeStyle = color;});
	},
	stroke:function (){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.stroke();});
	},
	beginPath:function (){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.beginPath();});
	},
	closePath:function (){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.closePath();});
	},
	moveTo:function (x,y){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.moveTo(x,y);});
	},
	lineTo:function (x,y){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.lineTo(x,y);});
	},
	clear:function (){
		var self = this;
		self.setList.splice(0,self.setList.length);
		self.showList.splice(0,self.showList.length);
	},
	rect:function (x,y,width,height){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.rect(x, y, width, height);});
		self.showList.push({type:"rect",value:[x,y,width,height]});
	},
	fillStyle:function (color){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.fillStyle = color;});
	},
	fill:function (color){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.fill();});
	},
	arc:function(x,y,radius,startAngle,endAngle,anticlockwise){
		var self = this;
		self.setList.push(function(){LGlobal.canvas.arc(x,y,radius,startAngle,endAngle,anticlockwise);});
	},
	drawArc:function(thickness,lineColor,pointArray,isfill,color){
		var self = this;
		self.setList.push(function(cx,cy){
			LGlobal.canvas.beginPath();
			LGlobal.canvas.arc(pointArray[0]+cx,pointArray[1]+cy,pointArray[2],pointArray[3],pointArray[4],pointArray[5]);
			if(isfill){
				LGlobal.canvas.fillStyle = color;
				LGlobal.canvas.fill();
			}
			LGlobal.canvas.lineWidth = thickness;
			LGlobal.canvas.strokeStyle = lineColor;
			LGlobal.canvas.stroke();
		});
		self.showList.push({type:"arc",value:pointArray});
	},
	drawRect:function (thickness,lineColor,pointArray,isfill,color){
		var self = this;
		self.setList.push(function(cx,cy){
			LGlobal.canvas.beginPath();
			LGlobal.canvas.rect(pointArray[0]+cx,pointArray[1]+cy,pointArray[2],pointArray[3]);
			if(isfill){
				LGlobal.canvas.fillStyle = color;
				LGlobal.canvas.fill();
			}
			LGlobal.canvas.lineWidth = thickness;
			LGlobal.canvas.strokeStyle = lineColor;
			LGlobal.canvas.stroke();
		});
		self.showList.push({type:"rect",value:pointArray});
	},
	drawLine:function (thickness,lineColor,pointArray){
		var self = this;
		self.setList.push(function(cx,cy){
			LGlobal.canvas.beginPath();
			LGlobal.canvas.moveTo(pointArray[0]+cx,pointArray[1]+cy);
			LGlobal.canvas.lineTo(pointArray[2]+cx,pointArray[3]+cy);
			LGlobal.canvas.lineWidth = thickness;
			LGlobal.canvas.strokeStyle = lineColor;
			LGlobal.canvas.closePath();
			LGlobal.canvas.stroke();
		});
	},
	lineStyle:function (thickness,color,alpha){
		var self = this; 
		if(color==null)color=self.color;
		if(alpha==null)alpha=self.alpha;
		self.color = color;
		self.alpha = alpha;
		self.setList.push(function(){
			LGlobal.canvas.lineWidth = thickness;
			LGlobal.canvas.strokeStyle = color;
		});
	},
	add:function (fun){
		var self = this;
		self.setList.push(fun);
	},
	ismouseon:function(event,cood){
		var self = this;
		var key;
		if(event==null || event == "undefined")return false;
		if(cood==null || cood == "undefined")cood={x:0,y:0};
		var ox,oy;
		if(event.offsetX == "undefined"){
			ox = event.touches[0].pageX;
			oy = event.touches[0].pageY;
		}else{
			ox = event.offsetX;
			oy = event.offsetY;
		}
		for(key in self.showList){
			if(self.showList[key].type == "rect"){
				if(ox >= self.showList[key].value[0] + cood.x && ox <= self.showList[key].value[0] + cood.x + self.showList[key].value[2] && 
					oy >= self.showList[key].value[1] + cood.y && oy <= self.showList[key].value[1] + cood.y + self.showList[key].value[3]){
					return true;
				}
			}else if(self.showList[key].type == "arc"){
				var xl = self.showList[key].value[0] + cood.x - ox;
				var yl = self.showList[key].value[1] + cood.y - oy;
				return xl*xl+yl*yl <= self.showList[key].value[2]*self.showList[key].value[2];
			}
		}
		
		return false;
	}
}