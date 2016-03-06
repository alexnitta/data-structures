

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(key, value) { /*Time Complexity - Linear - O(n)*/
  // generates index spot to put in this.storage
  var index = getIndexBelowMaxForKey(key, this._limit);

  // this is the bucket we want to add to, as designated by the index we got from hash function
  var currentBucket = this._storage.get(index);

  // if there is currently a bucket at this index
  if (currentBucket !== undefined) {

    // initialize var to track if there is a duplicate key
    var duplicates = false;

    // looping over active bucket, looking for duplicates
    _.each(currentBucket, function(tuple) {
      // if this tuple has a matching key,
      if (tuple[0] === key) {
        // overwrite the value
        tuple[1] = value;
        // set duplicates to true
        duplicates = true;
      }
    });
    
    // if no duplicates, add to currentBucket
    if (!duplicates) {
      currentBucket.push([key, value]);
    }
  
  } else {
    // create a new bucket in this storage index
    var bucket = [];
    // add tuple to bucket with key and value added
    bucket.push([key, value]);
    // assigning storage at index to be bucket
    this._storage.set(index, bucket);
  }

};

HashTable.prototype.retrieve = function(key) { /*Time Complexity - Linear - O(n)*/
  var index = getIndexBelowMaxForKey(key, this._limit);

  // this is the bucket we want to retrieve from
  var currentBucket = this._storage.get(index);
  
  // iterate through currentBucket to retrieve first value that matches key
  return _.reduce(currentBucket, function(foundValue, tuple) {
    // if it has already been found
    if (foundValue !== undefined) {
      // return that value that was found
      return foundValue;
    } 

    // if we find a tuple with the same key
    if (tuple[0] === key) {
      // remember this value as foundValue and return it after finishing iteration
      return tuple[1];
    }
    // if not found, return undefined
  }, undefined);
};

HashTable.prototype.remove = function(key) { /*Time Complexity - Linear - O(n)*/
  var index = getIndexBelowMaxForKey(key, this._limit);

  // this is the bucket we want to search for the tuple to remove
  var currentBucket = this._storage.get(index);

  // loop through currentbucket to find...
  _.each(currentBucket, function(tuple, i) {
    // where tuple[0] is the same as the key we are looking to remove
    if (tuple[0] === key) {
      // store the value that we're removing
      var result = tuple[1];
      //remove this tuple from our hash table
      currentBucket.splice(i, 1);
      // return the removed value
      return result;
    }
  });

  // return this in case the key is not found;
  return undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


