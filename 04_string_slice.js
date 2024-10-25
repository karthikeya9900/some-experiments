/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function max(a, b) {
  return a > b ? a : b;
}

function min(a, b) {
  return a < b ? a : b;
}

function slice(text, start, end) {
  let slicedString = "";
  const startingIndex = max(start, 0);
  const lastIndex = min(text.length - 1, end);

  for (let index = startingIndex; index <= lastIndex; index++) {
    slicedString += text[index];
  }

  return slicedString;
}

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function prepareMessage(text, start, end, expected) {
  const actual = slice(text, start, end);
  const markSegment = getMark(expected, actual) + "the sliced string is ";
  const outputSegment = expected + " and output is " + actual;
  const message = markSegment + outputSegment;

  console.log(message);
}

function testAll() {
  prepareMessage("hello world", 2, 7, "llo wo");
  prepareMessage("hello world", 0, 20, "hello world");
  prepareMessage("hello world", -10, 9, "hello worl");
  prepareMessage("hello world", 8, 8, "r");
  prepareMessage("hello world", -10, -5, "");
}

testAll();