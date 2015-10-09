

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {

  if(this._size >= (this._limit * .75)){
    this.resize(this._limit * 2);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket !== undefined){
    for(var i = 0; i < bucket.length; i++){
      if(bucket[i][0] === k){
        bucket[i][1] = v;
      } else{
        bucket.push([k,v]);
        this._size++;
      }
    }
  } else {
    bucket = [];
    bucket.push([k,v]);
    this._storage.set(index, bucket);
    this._size++;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket === undefined){
    return null;
  }
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      bucket[i][1] = null;
      bucket.splice(i,1);
      this._size--;
    }
  }
  if(this._size < (this._limit * .25)){
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(newLimit){
  var oldStore = this._storage;
  
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._size = 0;

  oldStore.each(function(bucket){
    if(bucket){  
      for(var i = 0; i < bucket.length; i++){
        this.insert(bucket[i][0],bucket[i][1]);
      }
    }
  }.bind(this));
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


