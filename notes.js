var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        obj.loc++;
    };
    return obj;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();

/*
Decorator code vs Classes

Class builds the object that its going to augment

Class is a construct that is capaable of building 
a fleet of simluar objects that all
conform to roughly the same interface
*/

//names Classes nouns, also make the first letter capital

var Car = function(loc){
	var obj = {loc:loc};
	obj.move = function(){
		obj.loc++;
	};
	return obj;
};
