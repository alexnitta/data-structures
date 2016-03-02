var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    }
    count--;

    var lowest = count + 1;

    for (var key in storage) {
      if (key < lowest) {
        lowest = key;
      }
    }

    return storage[lowest];
    return storage[size];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

// 0: val1, 1: val2, 2: val3

