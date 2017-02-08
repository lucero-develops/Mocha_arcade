/*
Learn to use the .prototype key to simplify thinking
about objects and improve your applications' performance
*/
/*
previously where where coping all the methods from 
Car.methods over to the new instance.
Now we are delegating failed lookups to Car.methods
*/
/*
The steps for making a class in this prottypal pattern
are pretty clear 
-You need a function that allow you to make instances 
-a line in that function that generates the
 	new instance object
-a delagation from the new object to some prototype object
-and some logic for augmenting the object
	with properties that make it unique from all the other 
	objects of the same class.

SINCE BUILDING A HOLDER OBJECT FOR METHODS 
AND ATTACHING IT AS A PROPERTY TO THE CONSTRUCTOR FUNCTION
IS SO COMMON THE LANGUAGE DOES THIS FOR YOU AUTOMATICALLY

WHEN EVER A FUNCTION IS CREATED IT WILL HAVE AN OBJECT 
ATTACHED TO IT THAT YOU CAN USE AS A CONTAINER OF METHODS 
JUST INCASE YOU PLAN ON USING THAT FUNCTION TO BUILD 
INSTANCES OF A CLASS


THIS IS STORED AT THE KEY ".prototype"

*/


Var Car = function(loc){
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj ;
};
Car.prototype.move = function(){
		this.loc++
};
