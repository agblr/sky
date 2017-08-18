function LURLLoader(){
	var self = this;
	self.objectindex = ++LGlobal.objectIndex;
	self.type="LURLLoader";
	self.loadtype = "";
	self.content = null;
	self.oncomplete = null;
	self.event = {};
}
LURLLoader.prototype = {
	addEventListener:function(type,listener){
		var self = this;
		if(type == LEvent.COMPLETE){
			self.oncomplete = listener;
		}
	},
	load:function (path,loadtype){
		var self = this;
		self.loadtype = loadtype;
		if(self.loadtype == "text"){
			$.post(LEGEND_FILE_PHP, {
				flg:"read",
				file:path
			},function(data){
				if(self.oncomplete){
					self.event.currentTarget = data;
					self.data = data;
					self.oncomplete(self.event);
				}
			});
		}
	}
}