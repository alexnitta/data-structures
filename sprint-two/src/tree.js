var Tree = function(value) {
  var newTree = {};

  // give this node a value as inputted
  newTree.value = value;

  // add shared methods to each tree instance
  _.extend(newTree, treeMethods);

  // create empty array to hold children
  newTree.children = []; 

  return newTree;
};

// object containing methods to add to Tree class
var treeMethods = {};

// adds a node to this node's children array
treeMethods.addChild = function(value) { /*Time Complexity - Constant - O(1)*/
  
  // create new instance of tree
  var child = Tree(value);

  // add instance to current node's children array
  this.children.push(child);
};

treeMethods.contains = function(target) { /*Time Complexity - Quadratic - O(n^2)*/

  // if the root node contains the value, return true
  if (this.value === target) {
    return true;
  }

  // set up a binary storage variable
  var wasFound = false;

  // recursively search through this.children for target = value
  var searchChildren = function (childArr) { 

    // loop through this collection of children
    _.each(childArr, function (item) {
      // if any child contains value,
      if (item.value === target) {
        // target was found
        wasFound = true;
      } else { // if no child contains target,
        // search deeper
        searchChildren(item.children);
      }
    });

  };

  // initial call on children of root
  searchChildren(this.children);

  // return result of search
  return wasFound;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
