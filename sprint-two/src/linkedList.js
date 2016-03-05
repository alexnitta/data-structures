var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { /*Time Complexity - Linear - O(n)*/
    // create myNode var for Node to add to end of head
    var myNode = Node(value);
    // var starts at list.head, and we will dig deeper with while loop
    var current = list.head;

    // Checking for first time operation (adding to empty list.head)
    if (current === null) {
      // if this is first value, set list.head to myNode
      list.head = myNode;
    } else {
      // Otherwise, dig into var current to add node when current.next === null
      while (current.next) {
        // if current.next !== null, change current to current.next (digging deeper)
        current = current.next;
      }

      // when current.next === null, we will change that to myNode;
      current.next = myNode;
    }

    // make list.tail to be last item added (myNode)
    list.tail = myNode;
  };

  list.removeHead = function() { /*Time Complexity - Constant - O(1)*/
    // storing current list.head as current
    var current = list.head;
    // replacing list.head with it's value from next
    list.head = list.head.next;
    // return old list.head value that was overwritten
    return current.value;
  };

  list.contains = function(target) { /*Time Complexity - Linear - O(n)*/
    // storing current list.head as current
    var current = list.head;

    // if current.next isn't null (will not check last node)
    while (current.next) {
      // check if current.value === target
      if (current.value === target) {
        return true;
      } else {
        // if current.value !== target
        current = current.next;
      }
    }

    // this checks if very last node has value === target
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

