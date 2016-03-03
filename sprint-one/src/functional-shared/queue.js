var Queue = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function(){
  var result = this.storage[this.start];
  delete this.storage[this.start];

  if (this.size())
    this.start++;

  return result;
};

queueMethods.size = function(){
  return this.end - this.start;
};




