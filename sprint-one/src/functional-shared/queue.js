var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[length] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  var result;
  if(this.length > 0){
    this.length--;
    result = this[0];
    delete this[0];
  }
  return result;
};

queueMethods.size = function(){
  return this.length;
};




