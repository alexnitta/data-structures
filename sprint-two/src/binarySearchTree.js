var BinarySearchTree = function(value) {
  var tree = Object.create(bstMethods);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree; 
};

bstMethods = {};

bstMethods.insert = function (value) { /*Time Complexity - Logarithmic - O(log(n))*/
  var newTree = BinarySearchTree(value);

  var binaryInsert = function (node) {
    if (node.value > value) {
      if (node.left === null) {
        node.left = newTree;
      } else {
        binaryInsert(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = newTree;
      } else {
        binaryInsert(node.right);
      }
    }
  };

  binaryInsert(this);
};

bstMethods.contains = function (target) { /*Time Complexity - Logarithmic - O(log(n))*/
  var binaryContains = function (node) {
    if (node.value === target) {
      return true;
    }

    if (target > node.value && node.right) {
      return binaryContains(node.right);
    } else if (node.left) {
      return binaryContains(node.left);
    }

    return false;
  };

  return binaryContains(this);
};

bstMethods.depthFirstLog = function (callback) { /*Time Complexity - Linear - O(n)*/
  var binaryEach = function (node) {
    callback(node.value);
    if (node.left) {
      binaryEach(node.left);
    }

    if (node.right) {
      binaryEach(node.right);
    }
  };

  binaryEach(this);
};

// Use case: Given a list of a million numbers, write a function that 
// takes a new number and returns the closest number in the list 
// using your BST. Profile this against the same operation using an array.

/* var result = null;

var closest = function (value, target) {
  if (target === value) {
    result = target;
  }

  if (Math.abs(result - target) > Math.abs(value - target)) {
    result = value;
  }
};

var binarySearchTree = BinarySearchTree(5);

binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(6);
binarySearchTree.insert(8);

binarySearchTree.depthFirstLog(function (value) {
  return closest(value, 8);
});

console.log(result);
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
