function Cell(s,element,x,y,w,h){
	this.element=element;
	this.color=null;
	this.graphics;
	this.rectangle={x:0,y:0,w:0,h:0};
	this.rectangle.x=x;
	this.rectangle.y=y;
	this.rectangle.w=w;
	this.rectangle.h=h;
	this.stage=stage;
	this.init();
	

};

Cell.prototype.init = function() {
	if(this.element==0) this.color=0x95810F;
	else if(this.element==1)this.color=0x3BB333;
	else if(this.element==2)this.color=0x4274D0;
	else if(this.element==3)this.color=0x87898E;
	this.graphics=new PIXI.Graphics();
	this.graphics.beginFill(this.color);
	this.graphics.lineStyle(2,0xFFFFFF);
	this.graphics.drawRect(this.rectangle.x,this.rectangle.y,this.rectangle.w,this.rectangle.h);
	
};
Cell.prototype.getGraphics = function() {
	
	return this.graphics;
};