/*
run. js 

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();


*/

var Car = function(loc){
	var obj = {loc:loc};
	obj.move = function(){
		obj.loc++;
	};
	return obj;
};

//to reduce duplicity  of 
//so many versions of the move method 
//you can move the method out of this class

var Car = function(loc){
	var obj = {loc:loc};
	obj.move = move;
	return obj;
};

var move = function(){
	this.loc++;
};

/*
the parameter of  THIS (this.example)
is going to treat the object left of the dot 
at call time as a function input and their 
for will provide use a name that we can use to refer 
to that object 