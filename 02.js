/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisibleBy(dividend, divisor) {
  return (dividend % divisor) === 0;
}

function isLeapYear(year) {

  if (isDivisibleBy(year, 400)) {
    return true;
  }

  return (!isDivisibleBy(year, 100) && isDivisibleBy(year, 4));
}

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function prepareMessage(year, expected) {
  const actual = isLeapYear(year);
  const segment1 = getMark(expected, actual) + " is leap year of ";
  const segment2 = year + " is " + expected + " and output is ";
  const message = segment1 + segment2 + actual;

  console.log(message);
}

function testAll() {
  prepareMessage(2000, true);
  prepareMessage(2001, false);
  prepareMessage(2004, true);
  prepareMessage(1900, false);
  prepareMessage(2010, false);
  prepareMessage(100, false);
  prepareMessage(200, false);
  prepareMessage(1964, true);
}

testAll();
