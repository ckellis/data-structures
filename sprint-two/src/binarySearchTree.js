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

BinarySearchTree.treeMethods.contains = function(target, node, flag){
  /*var currTree = this;
  while(currTree !== null){
    if(currTree.value === target){
      return true;
    } else if(target < currTree.value){
      currTree = currTree.left;
    } else {
      currTree = currTree.right;
    }
  }
  return false;
  */
  node = node || this;
  flag = false;
  if(node.value !== target && !node.left && !node.right){
    return flag;
  } else if(node.value === target){
    flag = true;
  } else if(node.value > target){
    flag = node.contains(target, node.left, flag);
  } else {
    flag = node.contains(target, node.right, flag);
  }
  return flag;
};

BinarySearchTree.treeMethods.depthFirstLog = function(func, node){
  node = node || this;
  if(node !== null){
    func(node.value);
  }
  if(node.left){
    node.depthFirstLog(func, node.left);
  }
  if(node.right){
    node.depthFirstLog(func, node.right);
  }

};

BinarySearchTree.treeMethods.breadthFirstLog = function(func){
  var toVisit = [this];
  while(toVisit.length > 0){
    var current = toVisit.shift();
    func(current.value);
    if(current.left){
      toVisit.push(current.left);
    }
    if(current.right){
      toVisit.push(current.right);
    }
  }
};

BinarySearchTree.treeMethods.rebalance = function(node){
  //if we have trailing to the left with no right children
  if(node.left && !node.right){
    if(node.left.left && !node.left.right){
      //make top node child of node being shifted up
      node.left.right = node;
      //set node to be new parent
      node = node.left;
      node.right.left = null;
    }
  }
  //if we have trailing to the right with no left children
  if(node.right && !node.left){
    if(node.right.right && !node.right.left){
      console.log("trailing right: "+ node);
      node.right.left = node;
      node = node.right;
      node.left.right = null;
    }
  }

  if(node.right){
    console.log("going right!");
    this.rebalance(node.right);
  }
  if(node.left){
    this.rebalance(node.left);
  }
  //node has a right child that has no right child

  //node has a left child that has no left child
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
