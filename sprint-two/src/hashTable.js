

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // generates index spot to put in this.storage
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (Array.isArray(this._storage[index])) {
    this.storage[index].push([k,v]);
  } else {
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }

};

HashTable.prototype.retrieve = function(k) {
  // generates index spot to search in this.storage
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var result = this._storage.get(index)[0][1];
  var storageLocation = this._storage.get(index);
  
  var result;
  
  _.each(storageLocation, function(tuple, i, collection){
    if(tuple[0] === k) {
      result = tuple[1];
    }
  });
  return result;
};

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


