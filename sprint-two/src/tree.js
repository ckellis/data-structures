var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fixed!
  _.extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var treeHelper = function(curr, found){
    if(curr.value === target){
      found = true;
    } else if(curr.children.length > 0){
        for(var i = 0; i < curr.children.length; i++){
          found = treeHelper(curr.children[i], found);
        }
    } else {
      found = found || false;
    }
    return found;
  }
  return treeHelper(this, false);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
