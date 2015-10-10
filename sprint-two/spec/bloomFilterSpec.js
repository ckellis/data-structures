describe('bloomFilter', function() {
  var bloom;

  beforeEach(function() {
    bloom = BloomFilter(18);
  });

  it('should return false if a value is not contained', function() {
    bloom.set(2);
    expect(bloom.query(3)).to.equal(false);
  });

  it('should return true if a value is contained', function(){
    bloom.set(2);
    expect(bloom.query(2)).to.equal(true);
  });

});
