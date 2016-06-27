function Fetus(index) {
	this.index=index;
	this.daylives=0;
	this.init();
}

Fetus.prototype.init = function() {
	var alterfetus;
	if(this.index==-1){
		alterfetus={index:this.index,name:"пусто",locate:-1};
	}
	else{
		alterfetus = getFetusForIndex(this.index);
	}
	
	this.name=alterfetus.name;
	
};
Fetus.prototype.addDay = function() {
	this.daylives++;
};