//Pseudoclassical Patterns



Var Car = function(loc){
	//creation and return of obj is repetitive
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj ;
};
Car.prototype.move = function(){
		this.loc++
};

//  JS provides the keyword 'new'

var ben = new Car(9);
Var Car = function(loc){
	this.loc = loc;
};
Car.prototype.move= function(){
	this.loc++;
};

//EXAMPLE OF A PSUEDOCLASSICAL CLASS

/*new provides us with the equivalent of 
	lines 3 and 5 in our function, so we don't
	 need them any more ... provided that we consistently
	  use new!