var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(!list.head){
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;

  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if(!list.head){
      list.head = newNode;
    } else {
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  };

  list.removeHead = function() {
    if(list.head){
      var removed = list.head.value;
      list.head = list.head.next;
      return removed;
    }
  };

  list.removeTail = function(){
    if(list.tail){
      var removed = list.tail.value;
      list.tail.prev.next = null;
      list.tail = list.tail.prev;
      return removed;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while(currentNode){
      if(currentNode.value === target){
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
