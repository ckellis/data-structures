var Stack = function() {
  var someInstance = {};

  someInstance.length = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if (this.length) {
    this.length--;
    var result = this[this.length];
    delete this[this.length];
    return result;
  }
};

stackMethods.size = function() {
  return this.length;
};

