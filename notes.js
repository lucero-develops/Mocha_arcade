var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        this.loc++;
    };
    return obj;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();

/*
now that the move function is being created everytime 
each one has unique access to a closure scoop that is created
when we invoke the car like function , thus we dont need to rely on 
the key word this anymore .

How would you rewrite the move function ?
*/

var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        obj.loc++;
    };
    return obj;
};

