var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fixed!
  _.extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function(){
  if(this.parent){
    for(var child = 0; child < this.parent.children.length; child++){
      if(this.parent.children[child] === this){
        this.parent.children.splice(child, 1);
      }
    }
    this.parent = null;
  }
};

treeMethods.traverse = function(callback, node){
  node = node || this;
  if(node.value){
    callback(node.value);
  }
  for(var i = 0; i < node.children.length; i++){
    this.traverse(callback, node.children[i]);
  }
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
