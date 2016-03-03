var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // var size that will fluctuate with number of items in storage
  var size = 0;
  // var count will always go up to give a numerical key for each added
  var count = 0;
  // lastKey variable will remember the last thing that was 
  // dequeued and we start with the first item
  var lastKey = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    }

    // first key dequeued will be 1, so we will increment by 1
    // every time we want to use the dequeue function.
    lastKey++;

    var results = storage[lastKey];
    delete storage[lastKey];
    return results;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};



