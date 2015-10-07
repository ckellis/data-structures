var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.length = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  for(var i = this.length; i >= 0; i--){
    this[i+1] = this[i];
  }
  this[0] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  var result;
  if(this.length > 0){
    result = this[this.length-1];
    delete this[this.length-1];
    this.length--;
  }
  return result;
};

queueMethods.size = function(){
  return this.length;
};


