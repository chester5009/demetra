
var el={
	0:"Earth",
	1:"Wood",
	2:"Water",
	3:"Mountains"
}

function Cell(s,element,x,y,w,h){
	this.element=element;
	this.color=null;
	this.sprite=null;
	this.graphics;
	this.rectangle={x:0,y:0,w:0,h:0};
	this.rectangle.x=x;
	this.rectangle.y=y;
	this.rectangle.w=w;
	this.rectangle.h=h;
	this.stage=stage;
	this.fetus=null;
	this.init();

	

};

Cell.prototype.init = function() {
	if(this.element==0) this.color=0x95810F;
	else if(this.element==1)this.color=0x3BB333;
	else if(this.element==2)this.color=0x4274D0;
	else if(this.element==3)this.color=0x87898E;
	else if(this.element==-1)this.color=null;
	this.graphics=new PIXI.Graphics();
	this.graphics.beginFill(this.color);
	this.graphics.lineStyle(2,0xFFFFFF);
	this.graphics.drawRect(this.rectangle.x,this.rectangle.y,this.rectangle.w,this.rectangle.h);
	
	
};
Cell.prototype.getGraphics = function() {
	
	return this.graphics;
};
Cell.prototype.setColor = function(element) {
	if(this.element==0) this.color=0x95810F;
	else if(this.element==1)this.color=0x3BB333;
	else if(this.element==2)this.color=0x4274D0;
	else if(this.element==3)this.color=0x87898E;
	else if(this.element==-1)this.color=null;
	
	this.graphics=new PIXI.Graphics();
	this.graphics.beginFill(this.color);
	this.graphics.lineStyle(2,0xFFFFFF);
	this.graphics.drawRect(this.rectangle.x,this.rectangle.y,this.rectangle.w,this.rectangle.h);
	
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
	if(this.element==0) i=0;
	else if(this.element==1)i=1;
	else if(this.element==2)i=2;
	else if(this.element==3)i=3;

	this.sprite.tilePosition.x=-w*i;
	this.sprite.tilePosition.y=0;


	
};

Cell.prototype.setFetus = function() {
	var newfetus=new Fetus(this.element);
	//console.log("THIs elem "+this.element);
	this.fetus=newfetus;
};