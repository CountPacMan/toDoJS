describe('getTriangle', function() {
  it("returns 'not a triangle' for input of 0 0 0", function() {
    expect(getTriangle(0, 0, 0)).to.equal("not a triangle");
  });

  it("returns 'not a triangle' if ANY sides are 0", function() {
    expect(getTriangle(1, 2, 0)).to.equal("not a triangle");
  });

  it("returns 'not a triangle' if ANY one side is longer than the other two combined", function() {
    expect(getTriangle(1, 7, 2)).to.equal("not a triangle");
  });

  it("returns 'equilateral' if sides are the same length", function() {
    expect(getTriangle(1, 1, 1)).to.equal("equilateral");
  });

  it("returns 'isosceles' if two sides are the same length", function() {
    expect(getTriangle(1, 1, 2)).to.equal("isosceles");
  });

  it("returns 'scalene' if no sides are the same length", function() {
    expect(getTriangle(4, 5, 6)).to.equal("scalene");
  });
});
