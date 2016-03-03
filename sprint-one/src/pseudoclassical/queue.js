var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.currentSize = 0;
  this.count = 0;
  this.lastKey = 0;
};

Queue.prototype.enqueue = function (value) {
  this.currentSize++;
  this.count++;
  this[this.count] = value;
};

Queue.prototype.dequeue = function () {
  if (this.currentSize > 0) {
    this.currentSize--;
  }

  this.lastKey++;
  var result = this[this.lastKey];
  delete this[this.lastKey];
  return result;
};

Queue.prototype.size = function () {
  return this.currentSize;
};
