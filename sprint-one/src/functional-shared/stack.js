var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.currentSize = 0;

  _.extend(storage, stackMethods);

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.currentSize] = value;
  this.currentSize++;
};

stackMethods.pop = function() {
  if (this.currentSize > 0) {
    this.currentSize--;
  }

  var results = this[this.currentSize];
  delete this[this.currentSize];
  return results;
};

stackMethods.size = function() {
  return this.currentSize;
};


