/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false
    endsWith('hello world', 'world') => false
  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubstringEmpty(substring) {
  return substring === "";
}

function getSubStringCand(string, substring) {
  let subStringCandidate = "";
  let index = string.length - 1;
  for (let count = 0; count < substring.length; count++) {
    subStringCandidate = string[index] + subStringCandidate;
    index--;
  }
  return subStringCandidate
}

function endsWith(string, substring) {
  if (!isSubstringEmpty(substring)) {
    const endPartOfString = getSubStringCand(string, substring);
    if (endPartOfString === substring) {
      return true;
    }
  }

  return false;
}

function getmark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function prepareMessage(string, substring, expected) {
  const actual = endsWith(string, substring);
  const markSegment = getmark(expected, actual) + '"' + string + '"';
  const charSegment = " it ends with " + '"' + substring + '"' + " is ";
  const resultSegment = expected + " and actual is " + actual;
  const message = markSegment + charSegment + resultSegment;

  console.log(message);
}

function testAll() {
  prepareMessage("hello world", "rld", true);
  prepareMessage("hello world", "owo", false);
  prepareMessage("hello world", "a", false);
  prepareMessage("hello world", "", false);
  prepareMessage("hello world", " ", false);
  prepareMessage("hello world", "d", true);
}

testAll();