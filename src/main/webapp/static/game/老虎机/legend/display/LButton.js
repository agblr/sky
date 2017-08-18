function LButton(bitmap_up,bitmap_over){
	base(this,LSprite,[]);
	var self = this;
	self.type = "LButton";
	self.bitmap_up = bitmap_up;
	self.addChild(bitmap_up);
	if(bitmap_over == null){
		bitmap_over = bitmap_up;
	}else{
		self.addChild(bitmap_over);
	}
	self.bitmap_over = bitmap_over;

	self.bitmap_over.visible = false;
	self.bitmap_up.visible = true;
	LGlobal.buttonList.push(self);
}

LButton.prototype.buttonModeChange = function (){
	var self = this;
	var cood={x:0,y:0};
	var parent = self.parent;
	while(parent != "root"){
		cood.x += parent.x;
		cood.y += parent.y;
		parent = parent.parent;
	}
	if(self.ismouseon(LGlobal.mouseMoveEvent,cood)){
		self.bitmap_up.visible = false;
		self.bitmap_over.visible = true;
	}else{
		self.bitmap_over.visible = false;
		self.bitmap_up.visible = true;
	}
}
LButton.prototype.die = function (){
	var self = this;
	arguments.callee.super.die.call(this);
	for(var i=0;i<LGlobal.buttonList.length;i++){
		if(LGlobal.buttonList[i].objectindex == self.objectindex){
			LGlobal.buttonList.splice(i,1);
			break;
		}
	}
}