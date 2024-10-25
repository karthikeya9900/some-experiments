/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getSubStrCand(string, subString, stringIndex) {
  let subStringCandidate = "";
  let subIndex = 0;
  while (subIndex < subString.length) {
    const index = (stringIndex + subIndex);
    subStringCandidate = subStringCandidate + string[index];
    subIndex++;
  }

  return subStringCandidate
}

function countOccurences(string, subString) {
  let noOfOccurences = 0;
  const noOfCheckings = string.length - (subString.length - 1);
  for (let stringIndex = 0; stringIndex < noOfCheckings; stringIndex++) {
    const callsubStrCand = getSubStrCand(string, subString, stringIndex);
    if (callsubStrCand === subString) {
      noOfOccurences++;
    }
  }

  return noOfOccurences;
}

function occurrences(string, subString) {
  if (subString !== "") {
    const count = countOccurences(string, subString)

    return count;
  }

  return 0;
}

function getmark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function prepareMessage(string, subString, expected) {
  const actual = occurrences(string, subString);
  const markSegment = getmark(expected, actual) + "substring occurences of";
  const charSegment = "'" + subString + "'" + " in " + string + " is ";
  const resultSegment = expected + " and actual is " + actual;
  const message = markSegment + charSegment + resultSegment;

  console.log(message);
}

function testAll() {
  prepareMessage("hello world", "ell", 1);
  prepareMessage("hello world", "owo", 0);
  prepareMessage("hello world", "l", 3);
  prepareMessage("hello world", " ", 1);
  prepareMessage("hello world", "", 0);
  prepareMessage("hello world hello world", "hello", 2);
  prepareMessage("hello world", "hai", 0);
}

testAll();