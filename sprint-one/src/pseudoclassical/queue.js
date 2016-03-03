var Queue = function() {
  this.start = 0;
  this.end = 0;
  this.storage = {};
};


Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function(){
  if (this.size()) {
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return result;
  }
};

Queue.prototype.size = function(){
  return this.end - this.start;
};
