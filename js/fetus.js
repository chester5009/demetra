function Fetus(index) {
	this.index=index;
	this.daylives=0;
	this.init();
}

Fetus.prototype.init = function() {
	var alterfetus = getFetusForIndex(this.index);
	this.name=alterfetus.name;
	
};
Fetus.prototype.addDay = function() {
	this.daylives++;
};