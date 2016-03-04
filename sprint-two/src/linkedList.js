var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var myNode = Node(value);
    var current = list.head;
    var tail = list.tail;

    if (current === null) {
      list.head = myNode;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = myNode;
    }

    list.tail = myNode;
  };

  list.removeHead = function() {
    var results = list.head;
    delete list.head;
    list.head = results.next;
    return results.value;
  };

  list.contains = function(target) { 

    var current = list.head;



    while (current.next) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }

    if (current.value === target) {
      return true;
    } else {
      return false;
    }
    
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

