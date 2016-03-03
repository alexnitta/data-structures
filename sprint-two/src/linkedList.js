var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var myNode = Node(value);
    if (list.head === null) {
      list.head = myNode;
      list.tail = myNode;
    }

    var nextDive = function (thisTail) {
      if (thisTail.next === null) {
        thisTail.next = myNode;
      } else {
        nextDive(thisTail.next);
      }
    };

    if (myNode !== list.tail) {
      nextDive(list.tail);
    }
  };

  list.removeHead = function() {
    var results = list.head;
    delete list.head;
    return results;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// list.head.next = 