/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
  */

function isDivisibleBy(dividend, divisor) {
    return dividend % divisor === 0;
}

function isPrime(primeCandidate) {
    if (primeCandidate < 2) {
        return false;
    }

    for (let divisor = 2; divisor < primeCandidate; divisor++) {
        if (isDivisibleBy(primeCandidate, divisor)) {
            return false;
        }
    }
    return true;

}

function firstPrimeAbove(number) {
    let primeCandidate = number + 1;
    while (!isPrime(primeCandidate)) {
        primeCandidate++;
    }

    return primeCandidate;

}

function getmark(expected, actual) {
    const mark = expected === actual ? "✅" : "❌";

    return mark;
}

function prepareMessage(number, expected) {
    const actual = firstPrimeAbove(number);
    const markSegment = getmark(expected, actual) + "the first prime above ";
    const charSegment = number + " is " + expected + " and actual is ";
    const message = markSegment + charSegment + actual;

    console.log(message);
}

function testAll() {
    prepareMessage(0, 2);
    prepareMessage(1, 2);
    prepareMessage(2, 3);
    prepareMessage(5, 7);
    prepareMessage(10, 11);
    prepareMessage(34, 37);
}

testAll();
