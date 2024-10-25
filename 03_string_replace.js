/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function replace(text, match, replacement) {
  let replacedString = "";
  for (let index = 0; index < text.length; index++) {
    const isMatchFound = text[index] === match;
    const currentChar = isMatchFound ? replacement : text[index];
    replacedString = replacedString + currentChar;
  }

  return replacedString;
}

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";
  
  return mark;
}

function prepareMessage(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const markSegment = getMark(expected, actual) + "the text is replaced ";
  const charSegment = match + " with " + replacement + " and output is ";
  const message = markSegment + charSegment + actual;
  
  console.log(message);
}

function testAll() {
  prepareMessage("hello world", "l", "r", "herro worrd");
  prepareMessage("hello world", " ", "r", "hellorworld");
  prepareMessage("hello world", "", "r", "hello world");
  prepareMessage("hello world", "-", " ", "hello world");
  prepareMessage("", "h", "@", "");
}

testAll();