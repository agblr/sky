function LAnimation(layer,data,list){
	base(this,LSprite,[]);
	var self = this;
	self.rowIndex = 0;
	self.colIndex = 0;

	self.bitmap =  new LBitmap(data);
	self.imageArray = list;
	self.addChild(self.bitmap);
	layer.addChild(self);
};
LAnimation.prototype.setAction = function (rowIndex,colIndex){
	var self = this;
	if(rowIndex != null && rowIndex >= 0 && rowIndex < self.imageArray.length)self.rowIndex = rowIndex;
	if(colIndex != null && colIndex >= 0 && colIndex < self.imageArray[rowIndex].length)self.colIndex = colIndex;
};
LAnimation.prototype.onframe = function (){
	var self = this;
	if(self.colIndex >= self.imageArray[self.rowIndex].length){
		self.colIndex = 0;
	}
	self.bitmap.bitmapData.setCoordinate(self.imageArray[self.rowIndex][self.colIndex].x,self.imageArray[self.rowIndex][self.colIndex].y);

	self.colIndex++;
};