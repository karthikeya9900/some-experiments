/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function factorial(number) {
  let productOfTerms = 1;
  for (let term = 1; term <= number; term++) {
    productOfTerms = productOfTerms * term;
  }

  return productOfTerms;
}

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function prepareMessage(number, expected) {
  const actualResult = factorial(number);
  const markSegment = getMark(expected, actualResult) + " factorial of ";
  const numberSegment = number + " is " + expected + " and value is ";
  const message = markSegment + numberSegment + actualResult;

  console.log(message);
}

function testAll() {
  prepareMessage(0, 1);
  prepareMessage(1, 1);
  prepareMessage(2, 2);
  prepareMessage(3, 6);
  prepareMessage(6, 720);
  prepareMessage(10, 3628800);
  prepareMessage(9, 362880);
}

testAll();