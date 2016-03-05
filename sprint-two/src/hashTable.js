

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  // generates index spot to put in this.storage
  var index = getIndexBelowMaxForKey(key, this._limit);
  var activeBucket = this._storage.get(index);

  if (activeBucket !== undefined) {

    var overWrite = false;
    
    for (var i = 0; i < activeBucket.length; i++) {
      if (activeBucket[i][0] === key) {
        activeBucket[i][1] = value;
        overWrite = true;
      }
    } 
    
    if (!overWrite) {
      activeBucket.push([key, value]);
    }
  
  } else {
    var bucket = [];
    bucket.push([key, value]);
    this._storage.set(index, bucket);
  }

};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  
  return _.reduce(bucket, function(foundValue, tuple) {
    if (foundValue !== undefined) {
      return foundValue;
    } 

    if (tuple[0] === key) {
      return tuple[1];
    }

  }, undefined);
};

// ^^ in retrieve ^^ our current problem: when we try to retrieve a value that was forced into 
// index 0 by the oldHashFunction in the spec file, we will not find it
// because our index var will be a real random hash


HashTable.prototype.remove = function(k) {
// generates index spot to that we'll be searching in to remove
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function (item, i, storage) {
    if (i === index) {
      _.each(storage[index], function (tuples, i, tuplesCollection) {
        if (tuples[0] === k) {
          tuplesCollection.splice(i, 1);
        }
      });
    }
   
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


