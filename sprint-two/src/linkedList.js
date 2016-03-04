var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var myNode = Node(value);
    if (list.head === null) {
      list.head = myNode;
    }
    list.tail = myNode;

    // use recursion to find the object whose .next property = null
    var findNull = function (obj) {
      if (obj.next !== null) {
        findNull(obj.next);
      } else {
        obj.next = list.tail;
      }
    };
    // set list.tail to this object
    if (list.head !== list.tail) {
      findNull(list.head);
    }

  };

  list.removeHead = function() {
    var results = list.head;
    delete list.head;
    console.log(results.next);
    list.head = results.next;
    return results.value;
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

