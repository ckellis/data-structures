var Stack = function() {
  this.length = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function(){
  if (this.length) {
    this.length--;
    var result = this.storage[this.length];
    delete this.storage[this.length];
    return result;
  }
};

Stack.prototype.size = function(){
  return this.length;
};
