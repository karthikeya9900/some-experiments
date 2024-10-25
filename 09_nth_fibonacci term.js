/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function nthFibonacciTerm(n) {
    let previous = 0;
    let current = 1;
    let next = 0;
    let count = 0;
    if (n > 0) {
        while (count + 1 <= n) {
            next = previous + current;
            previous = current;
            current = next;
            count++;
        }
        return current - previous;
    }
    return "invalid input";
}

function getmark(expected, actual) {
    const mark = expected === actual ? "✅" : "❌";

    return mark;
}

function prepareMessage(number, expected) {
    const actual = nthFibonacciTerm(number);
    const markSegment = getmark(expected, actual) + number + " term of ";
    const charSegment = " fibonacci is " + expected + " and actual is ";
    const message = markSegment + charSegment + actual;

    console.log(message);
}

function testAll() {
    prepareMessage(1, 0);
    prepareMessage(2, 1);
    prepareMessage(3, 1);
    prepareMessage(5, 3);
    prepareMessage(10, 34);
}

testAll();

//0 1 1 2 3 5 8 13 21 34 55 89
//1 2 3 4 5 6 7 8  9  10 11 12 13 14 15 