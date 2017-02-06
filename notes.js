var amy = {loc:1};
amy. loc++

var ben = {loc:9};
ben.loc++;

/*You should ask yourself what parts of this 
code is repeated?

created a seperate js file
libary.js   and created this function */
var move = function(car){
	car.loc++;
};
//No the orginal code and be rewritten as 
var amy = {loc:1};
move(amy);

var ben = {loc:9};
move(ben);

// now here is a function the creates an location object

var carlike = function(obj, loc){
	obj.loc = loc;
	return obj;
};

var amy = carlike({},1);
move(amy);

var ben = carlike({},9);
move(ben);