var table=[];

table.push({index:0,name:"земля",locate:-1});
table.push({index:1,name:"лес",locate:-1});
table.push({index:2,name:"вода",locate:-1});
table.push({index:3,name:"скалы",locate:-1});
table.push({index:4,name:"зерновой колос",locate:0});
table.push({index:5,name:"сноп пшеницы",locate:0});
table.push({index:6,name:"мельница",locate:0});


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
