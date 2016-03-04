

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // generates index spot to put in this.storage
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, v]);

};

HashTable.prototype.retrieve = function(k) {
  // generates index spot to search in this.storage
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[1];
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


