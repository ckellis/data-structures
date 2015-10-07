var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};


Queue.prototype.enqueue = function(value){
  for(var i = this.length; i >= 0; i--){
    this[i+1] = this[i];
  }
  this[0] = value;
  this.length++;
};

Queue.prototype.dequeue = function(){
  var result;
  if(this.length > 0){
    this.length--;
    result = this[this.length];
    delete this[this.length];
  }
  return result;
};

Queue.prototype.size = function(){
  return this.length;
};