var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance.length = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function(){
  if (this.length) {
    this.length--;
    var result = this.storage[this.length];
    delete this.storage[this.length];
  }
  return result;
};

stackMethods.size = function(){
  return this.length;
};

