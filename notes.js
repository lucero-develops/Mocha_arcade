var Car = function(loc){
    this.loc = loc;
};
Car.prototype.move = function(){
    this.loc++;
};

/*
the .call method of any function
allows us to run that function in 
exactly the context we want it to
*/
var Van = function(loc){
    Car.call(this, loc);
};

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
// grab unique to Van at this moment
Van.prototype.grab = function(){/*.....*/};



var zed = new Car(3);
zed.move();

var amy = new Van(9);
console.log(amy.loc);
amy.move();
amy.grab();
console.log(amy.constructor);
