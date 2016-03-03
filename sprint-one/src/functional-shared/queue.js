var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.currentSize = 0;
  storage.count = 0;
  storage.lastKey = 0;

  storage.enqueue = queueMethods.enqueue;
  storage.dequeue = queueMethods.dequeue;
  storage.size = queueMethods.size;

  return storage;
};

var queueMethods = {};
queueMethods.enqueue = function (value) {
  this.currentSize++;
};
queueMethods.dequeue = function () {

};
queueMethods.size = function () {
  return this.currentSize;
};