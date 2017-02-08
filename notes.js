/*
Learn to use the .prototype key to simplify thinking
about objects and improve your applications' performance
*/


Var Car = function(loc){
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj ;
};
Car.prototype.move = function(){
		this.loc++
};


console.log(Car.prototype.constructor);
//the constructor is the function its tied to 

console.log(amy.constructor);
//This would return the value of Car

log(amy instanceof Car);
/* this operator works by checkign to see
if the right operands .prototype object 
can be fround any where in the
left opperands prototype chain

Here Car.prototype can bee found somewhere in
Amy's prototype chain .
