/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz";
  }
  if (number % 3 === 0) {
    return "fizz";
  }
  if (number % 5 === 0) {
    return "buzz";
  }

  return ("" + number);
}

function getmark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function prepareMessage(number, expected) {
  const actual = fizzBuzz(number);
  const markSegment = getmark(expected, actual) + "the result of " + number;
  const charSegment = " for fizzbuzz is " + expected + " and actual is ";
  const message = markSegment + charSegment + actual;

  console.log(message);
}

function testAll() {
  prepareMessage(3, "fizz");
  prepareMessage(5, "buzz");
  prepareMessage(15, "fizzbuzz");
  prepareMessage(17, "17");
  prepareMessage(0, "fizzbuzz");
}

testAll();
