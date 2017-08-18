function LTextField(){
	var self = this;
	self.objectindex = ++LGlobal.objectIndex;
	self.type = "LTextField";
	self.texttype = null;
	self.x = 0;
	self.y = 0;
	self.text = "";
	self.font = "utf-8";
	self.size = "11";
	self.color = "#000000";
	self.textAlign = "left";
	self.textBaseline = "middle";
	self.lineWidth = 1;
	self.width = 150;
	self.height = 20;
	self.stroke = false;
	self.visible=true;
}

LTextField.prototype = {
	show:function (cood){
		if(cood==null)cood={x:0,y:0};
		var self = this;
		if(!self.visible)return;
		if(self.texttype == LTextFieldType.INPUT){
			self.inputBackLayer.show({x:self.x+cood.x,y:self.y+cood.y});
	    	if(LGlobal.inputBox.name == "input"+self.objectindex){
	    		LGlobal.inputBox.style.marginTop = (self.y+cood.y) + "px";
	    		LGlobal.inputBox.style.marginLeft = (self.x+cood.x) + "px";
	    	}
		}
	    LGlobal.canvas.font = self.size+"pt "+self.font;  
	    LGlobal.canvas.textAlign = self.textAlign;
	    LGlobal.canvas.textBaseline = self.textBaseline;
	    LGlobal.canvas.lineWidth = self.lineWidth;  
	    if(self.stroke){
		    LGlobal.canvas.strokeStyle = self.color;
	    	LGlobal.canvas.strokeText(self.text,parseFloat(cood.x) + parseFloat(self.x),
	    		parseFloat(cood.y) + parseFloat(self.y) + parseFloat(self.size),
	    		100);  
	    }else{
		    LGlobal.canvas.fillStyle = self.color;
	    	LGlobal.canvas.fillText(self.text,parseFloat(cood.x) + parseFloat(self.x),
		    		parseFloat(cood.y) + parseFloat(self.y) + parseFloat(self.size),
		    		100);
	    }
	    if(self.wind_flag){
	    	self.windRun();
	    }
	},
	setType:function(type){
		var self = this;
		if(self.texttype != type && type == LTextFieldType.INPUT){
			self.inputBackLayer = new LSprite();
			self.inputBackLayer.graphics.drawRect(1,"black",[0, 0, self.width, self.height],true,"#cccccc");
			self.inputBackLayer.addEventListener(LMouseEvent.MOUSE_DOWN, function(){
				if(self.texttype != LTextFieldType.INPUT)return;
				LGlobal.inputBox.style.display = "";
				LGlobal.inputBox.name = "input"+self.objectindex;
	    		LGlobal.inputTextField = self;
	    		LGlobal.inputTextBox.value = self.text;
	    		LGlobal.inputTextBox.style.height = self.height+"px";
	    		LGlobal.inputTextBox.style.width = self.width+"px";
			});
		}else{
			self.inputBackLayer = null;
		}
		self.texttype = type;
	},
	mouseEvent:function (event,type,cood){
		if(cood==null)cood={x:0,y:0};
		var self = this;
		if(self.inputBackLayer == null)return;
		self.inputBackLayer.mouseEvent(event,type,{x:self.x+cood.x,y:self.y+cood.y});
		
	},
	wind:function(listener){
		var self = this;
		self.wind_over_function = listener;
		self.wind_flag = true;
		self.wind_text = self.text;
		self.text = "";
		self.wind_length = 0;
	},
	windRun:function(){
		var self = this;
		if(self.wind_length > self.wind_text.length){
			self.wind_flag = false;
			if(self.wind_over_function)self.wind_over_function();
			return;
		}
		self.text = self.wind_text.substring(0,self.wind_length);
		self.wind_length++;
	}
}