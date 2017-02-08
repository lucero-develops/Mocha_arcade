/*
Learn to use the .prototype key to simplify thinking
about objects and improve your applications' performance
*/


Var Car = function(loc){
	var obj ={loc:loc};
	//extend is usually a high level function that copies 
	//the prototype of a new subclass that you want to extend
	// from the base class.
	extend(obj, Car.methods);
	return obj;
};
Car.methods = {
	move : function(){
		this.loc++;
	}
}

//Can you think of a way to inprove performance
// using prototypes proto type chains ?

// 
Var Car = function(loc){
	/*var obj ={loc:loc};
	problem here is where using an 
	object literal in order to build 
	the brand new instance of car and
	WHEN YOU USE AN OBJECT LITERAL to define
	an object you CANT SET ITS PROTOTYPE 
	SO>>>>>> use your other option to create 
	objects which is Object.create(This is going to be the thing its 
	delegates to)
	*/

	var obj = Object.create(Car.methods);
	//failed property lookups on these new instances 
	//will fall threw to Car.methods now

	//we now need to insure the loc property gets
	//added to our new object , since its no longer
	//inline as an object literal 
	obj.loc = loc;

	return obj ;
};
Car.methods={
	move : function(){
		this.loc++
	}
}
