/*
run. js 

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();


*/

var Car = function(loc?){
	var obj = {loc: loc};
	extend(obj, Car.methods);
	return obj;
};
Car.methods = {
	move : function(){
		this.loc++;
	}
};

/*
the purpose of this is decluttering 
the methods object OUT OF THE GLOBAL SCOPE
and is conveiently located as a 
property of Car
*/








