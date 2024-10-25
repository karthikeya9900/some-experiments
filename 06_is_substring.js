/*
  Implement the below function that tells if a string is substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getSubStrCand(string, stringIndex, subStringLength) {
  let subString = "";
  let subStringIndex = 0;
  while (subStringIndex < subStringLength) {
    const index = (stringIndex + subStringIndex);
    subString = subString + string[index];
    subStringIndex++;
  }

  return subString;
}

function noOfCheckingsNeeded(string, subString) {
  return string.length - (subString.length - 1);
}

function isSubstring(string, subString) {
  if (subString !== "") {
    const subStringLen = subString.length;
    const noOfChecks = noOfCheckingsNeeded(string, subString);
    for (let stringIndex = 0; stringIndex < noOfChecks; stringIndex++) {
      const callgetSubStr = getSubStrCand(string, stringIndex, subStringLen);
      if (callgetSubStr === subString) {
        return true;
      }
    }
  }

  return false;
}

function getmark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function prepareMessage(string, subString, expected) {
  const actual = isSubstring(string, subString);
  const markSegment = getmark(expected, actual) + '"' + subString + '"';
  const charSegment = " isSubstring of " + '"' + string + '"' + " is ";
  const resultSegment = expected + " and actual is " + actual;
  const message = markSegment + charSegment + resultSegment;

  console.log(message);
}

function testAll() {
  prepareMessage("hello world", "ell", true);
  prepareMessage("hello world", "owo", false);
  prepareMessage("hello world", "a", false);
  prepareMessage("hello world", "", false);
  prepareMessage("hello world", "H", false);
  prepareMessage("hello world", "llo world", true);
  prepareMessage("hello world", "d", true);
}

testAll();
