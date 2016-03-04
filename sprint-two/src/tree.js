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
  this.children.push(child);
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
