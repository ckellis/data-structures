var BloomFilter = function(limit) {
  var storage = [];
  for(var i = 0; i < limit; i++){
    storage[i] = 0;
  }
  var bloomLimit = limit;

  var bloomFilter = {};

  bloomFilter.query = function(input) {
    var firstIndex = hash1(input, bloomLimit);
    var secondIndex = hash2(input, bloomLimit);
    var thirdIndex = hash3(input, bloomLimit);
    return !!(storage[firstIndex] && storage[secondIndex] && storage[thirdIndex]);
  };

  bloomFilter.set = function(input) {
    var firstIndex = hash1(input, bloomLimit);
    var secondIndex = hash2(input, bloomLimit);
    var thirdIndex = hash3(input, bloomLimit);
    //checkLimit(index);
    console.log(firstIndex);
    storage[firstIndex] = 1;
    storage[secondIndex] = 1;
    storage[thirdIndex] = 1;
    console.log(storage);
  };

  /*
  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };
*/
  return bloomFilter;
};

var hash1 = function(k, limit){
  var hash = k * 89345;
  hash = hash % limit;
  return hash;
};

var hash2 = function(k, limit){
  var hash = k * 98658;
  hash = hash % limit;
  return hash;
};

var hash3 = function(k, limit){
  var hash = k * 23456;
  hash = hash % limit;
  return hash;
};