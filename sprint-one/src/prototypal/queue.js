var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.start = 0;
  someInstance.end = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function(){
  if (this.size()) {
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return result;
  }
};

queueMethods.size = function(){
  return this.end - this.start;
};


