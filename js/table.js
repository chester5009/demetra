var table=[];
var recipes=[];
table.push({index:0,name:"земля",locate:-1});
table.push({index:1,name:"лес",locate:-1});
table.push({index:2,name:"вода",locate:-1});
table.push({index:3,name:"скалы",locate:-1});
table.push({index:4,name:"зерновой колос",locate:0});
table.push({index:5,name:"сноп пшеницы",locate:0});
table.push({index:6,name:"мельница",locate:0});
table.push({index:7,name:"вишня xD",locate:0});

function getFetusForIndex(index){
	
	for (var i = 0; i < table.length; i++) {
		var elem=table[i];
		if(elem.index==index) return elem;
	}
	
}
function getFetusForName(name){
	
	for (var i = 0; i < table.length; i++) {
		var elem=table[i];
		if(elem.name==name) return elem;
	}
	
}


recipes.push({input:[4],howmany:[3],output:5}); //зернового колоса(4) 3 штуки и поулчаем сноп пшеницы(5)
recipes.push({input:[5],howmany:[4],output:6}); 
recipes.push({input:[6],howmany:[2],output:7}); 
//recipes.push({needs:[5,4,6]});
//recipes.push({needs:[6,2,7]});