var BinarySearchTree = function(value) {
  var newBST = Object.create(BinarySearchTree.treeMethods);
  newBST.left = null;
  newBST.right = null;
  newBST.value = value;

  return newBST; 
};

BinarySearchTree.treeMethods = {};

BinarySearchTree.treeMethods.insert = function(value){
  var newChild = BinarySearchTree(value);
  var currTree = this;
  while(currTree !== null){
    if(value > currTree.value){
      if(currTree.right){
        currTree = currTree.right;
      } else {
        currTree.right = newChild;
        break;
      }
    } else {
      if(currTree.left){
        currTree = currTree.left;
      } else {
        currTree.left = newChild;
        break;
      }
    }
  }
};

BinarySearchTree.treeMethods.contains = function(target){
  var currTree = this;
  while(currTree !== null){
    if(currTree.value === target){
      return true;
    } else if(target < currTree.value){
      currTree = currTree.left;
    } else {
      
    }
  }
};

BinarySearchTree.treeMethods.depthFirstLog = function(){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
