var Queue = function() {
  var someInstance = {};

  var storage = {};
  var start = 0;
  var end = 0;

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    var result = storage[start];
    delete storage[start];

    if(someInstance.size())
      start++;

    return result;
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
