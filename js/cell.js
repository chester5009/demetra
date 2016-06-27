function Cell(s,element,x,y,side){
	this.element=element;
	this.sprite=null;
	this.graphics;
	this.rectangle={x:0,y:0,w:0,h:0};
	this.rectangle.x=x;
	this.rectangle.y=y;
	this.rectangle.w=side;
	this.rectangle.h=side;
	this.stage=stage;
	this.fetus=null;
	this.init();

	

};

Cell.prototype.init = function() {
	
};
Cell.prototype.getGraphics = function() {
	
	return this.graphics;
};


Cell.prototype.setSprite = function(texture,w,h) {
	this.sprite=new PIXI.extras.TilingSprite(texture);
	this.sprite.scale.x=this.rectangle.w/w;
	this.sprite.scale.y=this.rectangle.h/h;
	this.sprite.width=w;
	this.sprite.height=h;
	this.sprite.x=this.rectangle.x;
	this.sprite.y=this.rectangle.y;
	var i=0;
	/*if(this.element==0) i=0;
	else if(this.element==1)i=1;
	else if(this.element==2)i=2;
	else if(this.element==3)i=3;*/
	i=this.fetus.index;

	this.sprite.tilePosition.x=-w*i;
	this.sprite.tilePosition.y=0;


	
};

Cell.prototype.changeFetus = function(newFetus) {
	//this.element=newElement;

	this.setFetus(newFetus);
	var i=this.fetus.index;
	if (i==-1) i=this.element;
	console.log("I "+i);
	this.sprite.tilePosition.x=-this.sprite.width*i;
	this.sprite.tilePosition.y=0;
};

Cell.prototype.setFetus = function(value) {
	
		var newfetus=new Fetus(value);
		//console.log("THIs elem "+this.element);
		this.fetus=newfetus;
	
	
};
Cell.prototype.resetCell = function() {
	this.setFetus(this.element);
	
	var i=this.fetus.index;
	console.log("I "+i);
	this.sprite.tilePosition.x=-this.sprite.width*i;
	this.sprite.tilePosition.y=0;
};