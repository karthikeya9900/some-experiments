/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(text, target) {
  let index = 0;
  while (index < text.length) {
    if (text[index] === target) {
      return index;
    }
    index++;
  }

  return -1;
}

function getmark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function prepareMessage(text, target, expected) {
  const actual = findIndex(text, target);
  const markSegment = getmark(expected, actual) + "the index of ";
  const charSegment = target + " is " + expected + " and output is ";
  const message = markSegment + charSegment + actual;

  console.log(message);
}

function testAll() {
  prepareMessage("hello world", "e", 1);
  prepareMessage("hello world", " ", 5);
  prepareMessage("hello world", "a", -1);
  prepareMessage("hello world", "", -1);
  prepareMessage("hello world", "d", 10);
  prepareMessage("hello world", "z", -1);
  prepareMessage("hello world", "h", 0);
}

testAll();
