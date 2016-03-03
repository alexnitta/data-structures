var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.currentSize = 0;


};

Stack.prototype.push = function(value) {
  this[this.currentSize] = value;
  this.currentSize++;
};

Stack.prototype.pop = function() {
  if (this.currentSize > 0) {
    this.currentSize--;
  }
  var result = this[this.currentSize];
  delete this[this.currentSize];
  return result;
};

Stack.prototype.size = function() {
  return this.currentSize;
};
