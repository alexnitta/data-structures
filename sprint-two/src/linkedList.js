var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.lastAdded = null;

  list.addToTail = function(value) {
    
    list[value] = Node(value);
    if (lastAdded) {
      list[lastAdded].next = value;
    }
    list.tail = list[value];
    list.lastAdded = value;

  };

  list.removeHead = function() {

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
