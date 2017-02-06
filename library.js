var move = function(car){
	car.loc++;
	//car.loc = cosine(car.loc+10)/2;
};

var carlike = function(obj, loc){
	obj.loc = loc;
	return obj;
};