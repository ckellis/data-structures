var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    for(var i = length; i >= 0; i--){
      storage[i+1] = storage[i];
    }
    storage[0] = value;
    length++;
  };

  someInstance.dequeue = function() {
    var result;
    if(length > 0){
      
      result = storage[length-1];
      delete storage[length-1];
      length--;
    }
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
