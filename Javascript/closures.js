// Closures

'use strict'

// This is assigning the variable obj to the result of the function call.
// Hides the value property from outside access.
// The result of the function still has all access to the value property :).
var obj = (function() {
  var value = 0;

  return {
    increment: function(inc) {
      if(typeof inc === 'number') {
        value += inc;
      }
      else {
        value += 1;
      }
    },
    getValue: function() {
      return value;
    }
  }
}());

obj.increment(77);
console.log("value: %d (should be NaN)", obj.value);
console.log("value: %d (should be 77)", obj.getValue());

// BAD EXAMPLE
var printBadEye = function() {
  var i;

  // Prints the current value of i at the end of the timeout.
  for (i = 0; i < 5; i += 1) {
    setTimeout(function() {
      console.log(i);
    }, 100);
  }
};

// printBadEye() should print all 5's
printBadEye();

// GOOD EXAMPLE
var printGoodEye = function() {
  var i;

  // Prints i at the current bounded value of i when helper(i) is called.
  var helper = function(i) {
    setTimeout(function() {
      console.log(i);
    }, 100);
  }

  for (i = 0; i < 5; i += 1) {
    helper(i);
  }
};

// printGoodEye() should print 1 2 3 4 5
printGoodEye();