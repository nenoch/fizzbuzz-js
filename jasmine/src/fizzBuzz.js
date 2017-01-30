// function FizzBuzz(){}

var Fizzbuzz = function() {};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Fizzbuzz.prototype.isDivisibleByThree = function(num) {
  return (num % 3 === 0);
};
