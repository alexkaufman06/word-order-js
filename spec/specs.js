describe('wordOrder', function() {
  it('returns a list of words', function() {
    expect(wordOrder("this is a string")).to.equal("this is a string");
  });

  it('returns a list of unique words', function() {
    expect(wordOrder("this this is is a string string")).to.eql("this is string a");
  });

  it('returns a list of unique words in order of frequency', function() {
    expect(wordOrder("this this is is is a string")).to.eql("is this a string");
  });
