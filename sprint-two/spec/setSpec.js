describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    set.add(1);
    set.add(2);
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(true);
  });

  it('should remove values (including numbers) from a set', function(){
    set.add("Mel Gibson");
    var obj = {'a': 1};
    set.add(obj);
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
    expect(set.contains(obj)).to.equal(true);
  });

});
