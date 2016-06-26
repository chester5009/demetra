var renderer= PIXI.autoDetectRenderer(800,600,{backgroundColor:'#35CED3'});
document.body.appendChild(renderer.view);

var stage=new PIXI.Container();

var graphics=new PIXI.Graphics();


var side=30;

var field=[];

var texture;



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
		//console.log(i);
		if(field[i].element==-1){
			field[i].element=0;
			//field[i].setColor(field[i].element);
			field[i].setSprite(PIXI.loader.resources.tiles.texture,40,40);

			count++;
		}
	}
	count=0;

	while(count<w){
		var i = getRandomInt(0,field.length-1);
		if(field[i].element==-1){
			field[i].element=1;
			field[i].setSprite(PIXI.loader.resources.tiles.texture,40,40);
			count++;
		}
	}
	count=0;

	while(count<wa){
		var i = getRandomInt(0,field.length-1);
		if(field[i].element==-1){
			field[i].element=2;
			field[i].setSprite(PIXI.loader.resources.tiles.texture,40,40);
			count++;
		}
	}
	count=0;

	while(count<m){
		var i = getRandomInt(0,field.length-1);
		if(field[i].element==-1){
			field[i].element=3;
			field[i].setSprite(PIXI.loader.resources.tiles.texture,40,40);
			count++;
		}
	}
	count=0;

	for (var i = 0; i < field.length; i++) {
			field[i].setFetus();
			stage.addChild(field[i].sprite);
			
		};
	

}


function render(){
	requestAnimationFrame(render);

	renderer.render(stage);
	
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function cellClick (x,y) {
	var i=Math.floor(x/side);
	var j=Math.floor(y/side);


	console.log(i+" "+j);

	
	
	if(i<Math.sqrt(field.length) && j<Math.sqrt(field.length) ){
		console.log(field[20*i+j].fetus.name);
	}
	
}

function click(e){
	var offset=$("canvas").offset();
	console.log((e.pageX-offset.left)+" "+(e.pageY-offset.top));
	var x=e.pageX-offset.left;
	var y=e.pageY-offset.top;

	cellClick(x,y);
}

function loadContent(){
	var loader=PIXI.loader;
	loader.add('tiles',"assets/tiles.png");
	loader.once('complete',function loaded () {
		console.log("all loaded");
		$("canvas").click(click);
		//createField(20,20);
		createCleverField(20,20,60,15,15,10);
		
		render();
	});
	loader.load();
}



window.onload=function(){
	loadContent();
	
}

