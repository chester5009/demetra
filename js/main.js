var renderer= PIXI.autoDetectRenderer(800,600,{backgroundColor:'#35CED3'});
document.body.appendChild(renderer.view);

var stage=new PIXI.Container();

var graphics=new PIXI.Graphics();


var side=30;

var field=[];

var texture;

var rows=20;
var cols=20;




function getCountCells(){
	var count=0;
	for(var i=0;i<rows;i++){
		for(var j=0;j<cols;j++){
			count++;
		}
	}
	return count;
}
function getNumberOfCells(value) {
	var count=0;
	for(var i=0;i<rows;i++){
		for(var j=0;j<cols;j++){
			if(field[i][j].element==value) count++
		}
	}
	return count;
}

function addElements(number,percent) {
	var numberAll=getCountCells();
	var numberPercent=numberAll/100*percent;
	var i=0;
	while(i<numberPercent){
		var row = getRandomInt(0,rows-1);
		var col = getRandomInt(0,cols-1);
		var currCell=field[row][col];
		if(currCell.element<0){
			field[row][col].element=number;
			field[row][col].setFetus(number);
			i++;
		}
	}
}

function createField(){
	field=[];
	for(var i=0;i<rows;i++){
		var a=[];
		for(var j=0;j<cols;j++){
			var newCell=new Cell(stage,-1,i*side,j*side,side);
			a.push(newCell);
		}
		field.push(a);

	}

	addElements(0,80);
	addElements(1,10);
	addElements(2,5);
	addElements(3,5);
	console.log("generated");
	for(var i=0;i<rows;i++){
		for(var j=0;j<cols;j++){
			field[i][j].setSprite(PIXI.loader.resources.tiles.texture,40,40);
			stage.addChild(field[i][j].sprite);
		}
	}
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
	
	
	
		if(i<rows && j<cols ){ //устанавливаем новый фетус (трава начальная ё	пта)

			var newFetus=getFetusForIndex(4);
			if(field[i][j].fetus.index==newFetus.locate){
				field[i][j].changeFetus(4);
				console.log(field[i][j].fetus.name);
			}else{
				isUpgrade(i,j);
			}
		
		}
	
	

	
	
}

function click(e){
	var offset=$("canvas").offset();
	console.log((e.pageX-offset.left)+" "+(e.pageY-offset.top));
	var x=e.pageX-offset.left;
	var y=e.pageY-offset.top;

	cellClick(x,y);
}

function resetArrayCells(arr){  //обнуляет все ячейки переданные в массиве
	for(var i=0;i<arr.length;i++){
		field[arr[i].row][arr[i].col].resetCell();
	}
}

function isUpgrade (row,col) {  //определяет соседей ячейки ,создает массив с их значениями ,нужными для апгрейда
	var currFetus=field[row][col].fetus;
	var needsCount;
	var values=[];
	var forReset=[];
	var whatsWill;
	var newFetusCoordinates={row:0,col:0};
	for(var i=0;i<recipes.length;i++){
		if(recipes[i].needs[0]==currFetus.index){
			needsCount=recipes[i].needs[1];
			whatsWill=recipes[i].needs[2];
			console.log("needs "+needsCount);
			break;
		}
	}
	var dr,dc;
	for(dr=-1;dr<2;dr++){//делает обход всех соседних ячеек ,собирает данные о них
		for(dc=-1;dc<2;dc++){
			try{
				
					if(field[row+dr][col+dc].fetus.index==field[row][col].fetus.index){
						values.push(field[row+dr][col+dc].fetus.index);
						if(dr==0 && dc==0){
							newFetusCoordinates.row=row;
							newFetusCoordinates.col=col;
						}
						else{
							forReset.push({row:row+dr,col:col+dc});
						}
					}
					
				
				
			}
			catch(err){
				console.log("err - "+err);
			}
			
		}
	}
	if(values.length>=needsCount){
		resetArrayCells(forReset);
		field[row][col].changeFetus(whatsWill);
	}
	
	console.log(values);
}
function upgradeFetus(row,col){
	var currFetus=field[row][col].fetus;
	if(currFetus.index!=-1){

	}
}

function loadContent(){
	var loader=PIXI.loader;
	loader.add('tiles',"assets/tiles.png");
	loader.once('complete',function loaded () {
		console.log("all loaded");
		$("canvas").click(click);
		createField();
		
		
		render();
	});
	loader.load();
}



window.onload=function(){
	loadContent();
	
}

