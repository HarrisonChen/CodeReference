'use strict';

var add = function(a, b) {
  return a + b
};

var obj = {
  value: 7,

  // Method Invocation Pattern
  // 'this directly refers to the obj.'
  increment: function(inc) {
    if(typeof inc === 'number') {
      this.value += inc;
    }
    else {
      this.value += 1;
    }
  }
};

obj.double = function() {
  // A workaround to access outer level object scope.
  // 'this' is a reference to 'obj'. We set a variable reference to 'this'
  // because calling 'this' inside a nested function would reference the
  // function and not 'obj'
  var that = this;

  // Functional Invocation Pattern
  var helper = function() {
    that.value = add(that.value, that.value);
  }

  helper();
};

// Constructor Invocation Pattern
// Creates constructor called Quo that takes in a string
var Quo = function(string) {
  this.status = string;
};

// Instanstiate a new Quo object
var myQuo = new Quo("confused");

// Gives all instances of the Quo object a method called 'getStatus',
// eventhough if the Quo object has already been created .. what?!?! amazing ..
// The method call is linked to Quo's prototype.
Quo.prototype.getStatus = function() {
  return this.status;
}

// Apply Invocation Pattern
// The apply function takes 2 arguments: obj to bind to 'this' and an array
// of arguments to pass into the function that is being 'applied'
var args = [3, 4];
var sum = add.apply(null, args);

var statusObj = {
  status: 'Everything is awesome!'
};

// statusObj is binded to 'this' in the Quo class,
// thus returning status in statusObj
var status = Quo.prototype.getStatus.apply(statusObj);

console.log('sum:');
console.log(sum);

console.log('status:');
console.log(status);

console.log(myQuo.getStatus());

obj.increment();
console.log(obj.value);

obj.increment(5);
console.log(obj.value);

obj.double();
console.log(obj.value);