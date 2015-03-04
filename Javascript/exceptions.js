'use strict';

var add = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    };
  }
  return a + b;
};

var messedUp = function() {
  try {
    add("five");
  }
  catch(e) {
    console.log("%s: %s", e.name, e.message);
  }
}

messedUp();
console.log('2 + 5 = %d', add(2, 5));