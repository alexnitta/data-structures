var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here

  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {value: value, children: []};
  _.extend(child, treeMethods);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  var wasFound = false;

  var searchChildren = function (childArr) {

    if (_.contains(childArr, target)) {
      wasFound = true;
    }

    _.each(childArr.children, function(item) {
      searchChildren(item);
    });

    // for (var i = 0; i < childArr.length; i++) {
    //   if (childArr[i] === target) {
    //     return true;
    //   }
    // }

    // _.each(childArr, function (item) {
    //   if (item.value === target) {
    //     return true;
    //   }

    //   if (item.children.length !== 0) {
    //     return searchChildren(item.children);
    //   }

    // });
  };

  searchChildren(this.children);
  return wasFound;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
