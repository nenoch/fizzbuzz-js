describe('Fizzbuzz', function() {

    beforeEach(function() {
     fizzbuzz = new Fizzbuzz();
    });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('screms different strings', function() {

    it('screms Fizz if divisible by 3', function() {
      expect(fizzbuzz.screams(3)).toEqual('Fizz');
    });

    it('screms Buzz if divisible by 5', function() {
      expect(fizzbuzz.screams(5)).toEqual('Buzz');
    });

    it('screms FizzBuzz if divisible by 3 and 5', function() {
      expect(fizzbuzz.screams(15)).toEqual('FizzBuzz');
    });

    it('returns the number if not divisible either by 3 or 5', function() {
      expect(fizzbuzz.screams(2)).toEqual(2);
    });

  });

});
