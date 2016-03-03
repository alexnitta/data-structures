var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.currentSize = 0;

  storage.push = stackMethods.push;
  storage.pop = stackMethods.pop;
  storage.size = stackMethods.size;

  return storage;
};

var stackMethods = {};

stackMethods.push = function() {
  this.currentSize++;
};

stackMethods.pop = function() {
  if (this.currentSize > 0) {
    this.currentSize--;
  }

};

stackMethods.size = function() {
  return this.currentSize;
};


