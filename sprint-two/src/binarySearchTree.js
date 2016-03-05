var BinarySearchTree = function(value) {
  var tree = Object.create(bstMethods);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;

};

bstMethods = {};

bstMethods.insert = function (value) {
  var newTree = BinarySearchTree(value);

  var binaryDig = function (node) {
    if (node.value > value) {
      if (node.left === null) {
        node.left = newTree;
      } else {
        binaryDig(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = newTree;
      } else {
        binaryDig(node.right);
      }
    }
  };

  binaryDig(this);
};

bstMethods.contains = function (target) {

  var targetDig = function (node) {
    if (node.value === target) {
      return true;
    }

    if (target > node.value && node.right) {
      return targetDig(node.right);
    } else if (node.left) {
      return targetDig(node.left);
    }

    return false;
  };

  return targetDig(this);

};

bstMethods.depthFirstLog = function (callback) {

  var callbackDig = function (node) {
    callback(node.value);
    if (node.left) {
      callbackDig(node.left);
    }

    if (node.right) {
      callbackDig(node.right);
    }
  };

  callbackDig(this);

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
