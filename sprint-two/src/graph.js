

// ------------------------
// Instantiate a new graph
var Graph = function() {

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { /*Time Complexity - Constant - O(1)*/
  this[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { /*Time Complexity - Linear - O(n)*/

  return _.contains(this, node) ? true : false;
  
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { /*Time Complexity - Constant - O(1)*/
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { /*Time Complexity - Constant - 0(1)*/
  if (this[fromNode] === toNode || this[toNode] === fromNode) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { /*Time Complexity - Constant - 0(1)*/

// START HERE?
  if (fromNode === toNode) {
    this[toNode] = fromNode;
  }
    
  this[fromNode] = toNode;

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { /*Time Complexity - Constant - 0(1)*/
  this[fromNode] = fromNode;
  this[toNode] = toNode;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { /*Time Complexity - Linear - O(n)*/
  _.each(this, function(node, edge, graph) {
    cb(node, edge, graph);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


