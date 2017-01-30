// function FizzBuzz(){}

var Fizzbuzz = function() {};

Fizzbuzz.prototype._isDivisibleBy = function(num, divisor) {
  return (num % divisor === 0);
};

Fizzbuzz.prototype.isDivisibleByThree = function(num) {
  return this._isDivisibleBy(num, 3);
};

Fizzbuzz.prototype.isDivisibleByFive = function(num) {
  return this._isDivisibleBy(num, 5);
};

Fizzbuzz.prototype.isDivisibleByFifteen = function(num) {
  return this._isDivisibleBy(num, 15);
};

Fizzbuzz.prototype.screams = function(num) {
  if (this.isDivisibleByFifteen(num)) {
    return "FizzBuzz";
  }
  if (this.isDivisibleByThree(num)) {
    return "Fizz";
  }
  if (this.isDivisibleByFive(num)) {
    return "Buzz";
  }
  return num;
};
