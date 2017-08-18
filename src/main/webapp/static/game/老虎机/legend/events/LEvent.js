var LEvent = function (){this.type="LEvent";};
LEvent.COMPLETE = "complete";
LEvent.ENTER_FRAME = "enter_frame";

LEvent.currentTarget = null;
LEvent.addEventListener = function (node, type, fun,boo){
	if(boo==null)boo=false;
	if(node.addEventListener){
		node.addEventListener(type, fun, false);
	}else if(node.attachEvent){
		node['e' + type + fun] = fun;
		node[type + fun] = function(){node['e' + type + fun]();};
		node.attachEvent('on' + type, node[type + fun]);
	}
};