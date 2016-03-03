var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.currentSize = 0;
  storage.count = 0;
  storage.lastKey = 0;

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.currentSize++;
  this.count++;
  this[this.count] = value;
};

queueMethods.dequeue = function () {
  if (this.currentSize > 0) {
    this.currentSize--;
  }

  this.lastKey++;
  var result = this[this.lastKey];
  delete this[this.lastKey];
  return result;
};

queueMethods.size = function () {
  return this.currentSize;
};


