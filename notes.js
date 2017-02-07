/*
run. js 

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();


*/


var Car = function(loc){
	var obj = {loc:loc};
	obj.move = move;
	return obj;
};

var move = function(){
	this.loc++;
};

/*
We now arrived at a functional CLASS pattern with 
shared methods or simply the FUNCTIONAL SHARED PATTERN, 
still needs some clean up though.

Maybe you can store all your methods you plan on
adding to Cars in an object in the first place , that way 
its easy to irreate over over the object programmatically
*/

var Car = function(loc){
	var obj = {loc:loc};
	//
	extend(obj,methods);
	return obj;
};

// currently methods is a global variable which we shouldn't do 
var methods = {
	move: function(){
		this.loc++;
	},

on  : function(){/*...*/},
off : function(){/*...*/}
};

/*
Lets use the objects features of the Car function 
to make room for the object that stores these methods

instead of using a global variable named methods ,
we will instead put a property on the Car function 
named Car.methods
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



