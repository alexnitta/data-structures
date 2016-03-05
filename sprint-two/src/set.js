var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { /*Time Complexity - Constant - O(1)*/
  this[item] = item;
};

setPrototype.contains = function(item) { /*Time Complexity - Linear - O(n)*/
  return _.contains(this, item);
};

setPrototype.remove = function(item) { /*Time Complexity - Constant - O(1)*/
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
