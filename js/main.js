var renderer= PIXI.autoDetectRenderer(800,600,{backgroundColor:'#35CED3'});
document.body.appendChild(renderer.view);

var stage=new PIXI.Container();

var graphics=new PIXI.Graphics();


var side=25;

var field=[];





function createField(x,y){
	for (var i = 0; i < y; i++) {
		for (var j = 0; j < x; j++) {
			var element=getRandomInt(0,3);
			var oneCell=new Cell(stage,element,i*side,j*side,side,side);
			field.push(oneCell);
			stage.addChild(oneCell.getGraphics());
			/*graphics.beginFill(0x00FF00);
			graphics.lineStyle(2,0x0000ff);
			graphics.drawRect(i*side,j*side,side,side);*/
			//stage.addChild(graphics);
		};
	};
}

function createCleverField(x,y,earth,wood,water,mountain){
	var e=earth;
	var w=wood;
	var wa=water;
	var m=mountain;
	for (var i = 0; i < y; i++) {
		for (var j = 0; j < x; j++) {
			var element=getRandomInt(0,3);
			var oneCell=new Cell(stage,element,i*side,j*side,side,side);
			field.push(oneCell);
			stage.addChild(oneCell.getGraphics());
			/*graphics.beginFill(0x00FF00);
			graphics.lineStyle(2,0x0000ff);
			graphics.drawRect(i*side,j*side,side,side);*/
			//stage.addChild(graphics);
		};
	};
}


function render(){
	requestAnimationFrame(render);

	renderer.render(stage);
	
}


window.onload=function(){
	createField(20,20);
	
	render();
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
