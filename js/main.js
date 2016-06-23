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
	var onePercent=x*y/100;
	var e=earth*onePercent;
	var w=wood*onePercent;
	var wa=water*onePercent;
	var m=mountain*onePercent;
	for (var i = 0; i < y; i++) {
		for (var j = 0; j < x; j++) {
			var oneCell=new Cell(stage,-1,i*side,j*side,side,side);
			field.push(oneCell);
			//stage.addChild(oneCell.getGraphics());
			
		};
	};

	var count=0;

	while(count<e){
		var i = getRandomInt(0,field.length-1);
		console.log(i);
		if(field[i].element==-1){
			field[i].element=0;
			field[i].setColor(field[i].element);
			count++;
		}
	}
	count=0;

	while(count<w){
		var i = getRandomInt(0,field.length-1);
		if(field[i].element==-1){
			field[i].element=1;
			field[i].setColor(field[i].element);
			count++;
		}
	}
	count=0;

	while(count<wa){
		var i = getRandomInt(0,field.length-1);
		if(field[i].element==-1){
			field[i].element=2;
			field[i].setColor(field[i].element);
			count++;
		}
	}
	count=0;

	while(count<m){
		var i = getRandomInt(0,field.length-1);
		if(field[i].element==-1){
			field[i].element=3;
			field[i].setColor(field[i].element);
			count++;
		}
	}
	count=0;

	for (var i = 0; i < field.length; i++) {
			stage.addChild(field[i].getGraphics());
			
		};
	

}


function render(){
	requestAnimationFrame(render);

	renderer.render(stage);
	
}


window.onload=function(){
	//createField(20,20);
	createCleverField(20,20,60,15,15,10);
	render();
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
