var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    var result;
    if(length > 0){
      length--;
      result = storage[0];
      delete storage[0];
    }
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
