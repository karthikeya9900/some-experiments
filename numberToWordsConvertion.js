// ----------------------- global constants-------------------------------

const TENS_PLACE_WORD = ["", "", "twenty", "thirty", "forty", "fifty", "sixty",
  "seventy", "eighty", "ninety"];

const WORDS_FROM_0_TO_19 = ["", "one", "two", "three", "four", "five", "six",
  "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
  "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const UNITS_OF_IN = ["thousand", "lakh", "crore", "arab",
  "karab"];

const UNITS_OF_IS = ["thousand", "million", "billion"];

// ----------------------- programm part -------------------------------

function generateWordForTwoDigits(number) {
  if (number < 20) {
    return WORDS_FROM_0_TO_19[number];
  }

  const tensPlace = TENS_PLACE_WORD[Math.floor(number / 10)];
  const unitPlace = WORDS_FROM_0_TO_19[number % 10];

  return (tensPlace + " " + unitPlace).trimEnd();
}

function generateWordsForThreeDigits(number) {
  if (number < 100) {
    return generateWordForTwoDigits(number);
  }

  let numberInWords = "";
  numberInWords += WORDS_FROM_0_TO_19[Math.floor(number / 100)] + " ";
  numberInWords += "hundred" + " " + generateWordForTwoDigits(number % 100);

  return numberInWords.trim();
}

function addUnits(numberInWords, specificUnits) {
  let numInWords = numberInWords[0];

  for (let index = 0; index < numberInWords.length - 1; index++) {
    if (numberInWords[index + 1] !== "") {
      numInWords = specificUnits[index] + " " + numInWords;
      numInWords = numberInWords[index + 1] + " " + numInWords;
    }
  }

  return numInWords.trim();
}

// ----------------- specific system convertion functions---------------------

function generateWordsForIN(number) {

  let num = number;
  const numberInWords = [];

  numberInWords.push(generateWordsForThreeDigits(num % 1000));
  num = Math.floor(num / 1000);

  while (num > 0) {
    numberInWords.push(generateWordForTwoDigits(num % 100));
    num = Math.floor(num / 100);
  }

  return addUnits(numberInWords, UNITS_OF_IN);
}

function generateWordsForIS(number) {
  let num = number;
  const numberInWords = [];

  while (num > 0) {
    numberInWords.push(generateWordsForThreeDigits(num % 1000));
    num = Math.floor(num / 1000);
  }

  return addUnits(numberInWords, UNITS_OF_IS);
}

// --------------------------- main function --------------------------------

function numberToWords(number, NumberSystem) {
  if (number === 0) {
    return "zero";
  }

  return NumberSystem === "IN" ? generateWordsForIN(number) :
    generateWordsForIS(number);
}

// -------------------------- user interaction part ---------------------------

function getNumberSystem() {
  const input = prompt("\n enter the choice:");

  if (input === "IS" || input === "IN") {
    return input;
  }

  console.log("choice invalid enter a valid input!");

  return getNumberSystem();
}

function getNumberfromUser() {
  const number = prompt("enter the number:");

  if (!isNaN(number)) {
    return +number;
  }

  console.log("enter a valid number!");
  return getNumberfromUser();
}

function convertNumberToWords() {
  let message = "\t enter the number you want to convert";
  message += "\n\t enter 'IS' for international And 'IN' for indian ";
  console.log(message);

  const choice = getNumberSystem();
  const number = getNumberfromUser();
  const numberInWords = numberToWords(number, choice);

  console.log(number);
  console.log("IN WORDS ==>", numberInWords);
}

// convertNumberToWords();

// ----------------------- Testing part -------------------------------

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function generateMesage(array1, system, actual, expected) {
  const mark = getMark(expected, actual);
  const numberSystem = "\n number system :" + system;
  const inputpart = "\n inputs:" + array1;
  const expectedPart = "\n expected to be:" + expected;
  const actualPart = "\n actual is:" + actual;

  return mark + numberSystem + inputpart + expectedPart + actualPart + "\n";
}

function testNumberToWords(number, system, expected) {
  const actual = numberToWords(number, system);

  console.log(generateMesage(number, system, actual, expected));
}

//--------------------------------- Test Cases ------------------------------


// indian number system

function testSingleDigitsIN() {
  testNumberToWords(0, "IN", "zero");
  testNumberToWords(1, "IN", "one");
  testNumberToWords(2, "IN", "two");
  testNumberToWords(3, "IN", "three");
  testNumberToWords(4, "IN", "four");
  testNumberToWords(5, "IN", "five");
  testNumberToWords(6, "IN", "six");
  testNumberToWords(7, "IN", "seven");
  testNumberToWords(8, "IN", "eight");
  testNumberToWords(9, "IN", "nine");
}

function testTwoDigitsIN() {
  testNumberToWords(10, "IN", "ten");
  testNumberToWords(99, "IN", "ninety nine");
  testNumberToWords(14, "IN", "fourteen");
  testNumberToWords(67, "IN", "sixty seven");
  testNumberToWords(90, "IN", "ninety");
  testNumberToWords(33, "IN", "thirty three");
  testNumberToWords(20, "IN", "twenty");
  testNumberToWords(50, "IN", "fifty");
}

function testHundredsIN() {
  testNumberToWords(100, "IN", "one hundred");
  testNumberToWords(200, "IN", "two hundred");
  testNumberToWords(300, "IN", "three hundred");
  testNumberToWords(400, "IN", "four hundred");
  testNumberToWords(500, "IN", "five hundred");
  testNumberToWords(600, "IN", "six hundred");
  testNumberToWords(700, "IN", "seven hundred");
  testNumberToWords(800, "IN", "eight hundred");
  testNumberToWords(900, "IN", "nine hundred");
}

function testThreeDigitsIN() {
  testNumberToWords(102, "IN", "one hundred two");
  testNumberToWords(878, "IN", "eight hundred seventy eight");
  testNumberToWords(231, "IN", "two hundred thirty one");
  testNumberToWords(324, "IN", "three hundred twenty four");
  testNumberToWords(425, "IN", "four hundred twenty five");
  testNumberToWords(666, "IN", "six hundred sixty six");
  testNumberToWords(999, "IN", "nine hundred ninety nine");
}

function test4And5DigitsIN() {
  testNumberToWords(23456, "IN", "twenty three thousand four hundred fifty six");
  testNumberToWords(15550, "IN", "fifteen thousand five hundred fifty");
  testNumberToWords(50000, "IN", "fifty thousand");
  testNumberToWords(10001, "IN", "ten thousand one");
  testNumberToWords(60041, "IN", "sixty thousand forty one");
}

function test6To8DigitsIN() {
  let expected = "one lakh twenty three thousand four hundred twenty three";
  testNumberToWords(123423, "IN", expected);

  expected = "fifty three lakh sixty seven thousand two";
  expected += " hundred twelve";
  testNumberToWords(5367212, "IN", expected);

  expected = "five crore thirty six lakh seventy ";
  expected += 'two thousand one hundred twenty nine';
  testNumberToWords(53672129, "IN", expected);

}

function test9To10DigitsIN() {
  let expected = "fifty three crore sixty seven lakh twenty";
  expected += " one thousand two hundred twelve";
  testNumberToWords(536721212, "IN", expected);

  expected = "five arab forty four crore fifty four lakh";
  expected += " sixty three thousand two hundred fourteen";
  testNumberToWords(5445463214, "IN", expected);
}

function test11To12DigitsIN() {
  let expected = "ninety one arab forty six crore twenty one lakh ";
  expected += "twelve thousand eight hundred ninety one";
  testNumberToWords(91462112891, "IN", expected);

  expected = "one karab twenty three arab forty nine crore forty seven lakh ";
  expected += "thirty three thousand four hundred fifty two";
  testNumberToWords(123494733452, "IN", expected);
}

function testEdgeCasesIN() {
  testNumberToWords(1000, "IN", "one thousand");
  testNumberToWords(1001, "IN", "one thousand one");
  testNumberToWords(10000, "IN", "ten thousand");
  testNumberToWords(10001, "IN", "ten thousand one");
  testNumberToWords(100000, "IN", "one lakh");
  testNumberToWords(100001, "IN", "one lakh one");
  testNumberToWords(1000000, "IN", "ten lakh");
  testNumberToWords(1000001, "IN", "ten lakh one");
  testNumberToWords(10000000, "IN", "one crore");
  testNumberToWords(10000001, "IN", "one crore one");
  testNumberToWords(100000000, "IN", "ten crore");
  testNumberToWords(100000001, "IN", "ten crore one");
}

function testEdgeCases2IN() {
  testNumberToWords(1000000000, "IN", "one arab");
  testNumberToWords(1000000001, "IN", "one arab one");
  testNumberToWords(1000600000, "IN", "one arab six lakh");
  testNumberToWords(10000000000, "IN", "ten arab");
  testNumberToWords(10000000001, "IN", "ten arab one");
  testNumberToWords(10600000000, "IN", "ten arab sixty crore");
  testNumberToWords(100000000000, "IN", "one karab");
  testNumberToWords(100000000001, "IN", "one karab one");
  testNumberToWords(100060000000, "IN", "one karab six crore");
}

function testAllOfIndianSystem() {
  testSingleDigitsIN();
  testTwoDigitsIN();
  testThreeDigitsIN();
  test4And5DigitsIN();
  test6To8DigitsIN();
  test9To10DigitsIN();
  test11To12DigitsIN();
  testHundredsIN();
  testEdgeCasesIN();
  testEdgeCases2IN();
}

testAllOfIndianSystem();

// -------------------------------- Test Cases ----------------------------

// international system 


function testSingleDigitsIS() {
  testNumberToWords(0, "IS", "zero");
  testNumberToWords(1, "IS", "one");
  testNumberToWords(2, "IS", "two");
  testNumberToWords(3, "IS", "three");
  testNumberToWords(4, "IS", "four");
  testNumberToWords(5, "IS", "five");
  testNumberToWords(6, "IS", "six");
  testNumberToWords(7, "IS", "seven");
  testNumberToWords(8, "IS", "eight");
  testNumberToWords(9, "IS", "nine");
}

function testTwoDigitsIS() {
  testNumberToWords(10, "IS", "ten");
  testNumberToWords(99, "IS", "ninety nine");
  testNumberToWords(14, "IS", "fourteen");
  testNumberToWords(67, "IS", "sixty seven");
  testNumberToWords(90, "IS", "ninety");
  testNumberToWords(33, "IS", "thirty three");
  testNumberToWords(20, "IS", "twenty");
  testNumberToWords(50, "IS", "fifty");
}

function testHundredsIS() {
  testNumberToWords(100, "IS", "one hundred");
  testNumberToWords(200, "IS", "two hundred");
  testNumberToWords(300, "IS", "three hundred");
  testNumberToWords(400, "IS", "four hundred");
  testNumberToWords(500, "IS", "five hundred");
  testNumberToWords(600, "IS", "six hundred");
  testNumberToWords(700, "IS", "seven hundred");
  testNumberToWords(800, "IS", "eight hundred");
  testNumberToWords(900, "IS", "nine hundred");
}

function testThreeDigitsIS() {
  testNumberToWords(102, "IS", "one hundred two");
  testNumberToWords(878, "IS", "eight hundred seventy eight");
  testNumberToWords(231, "IS", "two hundred thirty one");
  testNumberToWords(324, "IS", "three hundred twenty four");
  testNumberToWords(425, "IS", "four hundred twenty five");
  testNumberToWords(666, "IS", "six hundred sixty six");
  testNumberToWords(999, "IS", "nine hundred ninety nine");
}

function test4And5DigitsIS() {
  testNumberToWords(23456, "IS", "twenty three thousand four hundred fifty six");
  testNumberToWords(15550, "IS", "fifteen thousand five hundred fifty");
  testNumberToWords(50000, "IS", "fifty thousand");
  testNumberToWords(10001, "IS", "ten thousand one");
  testNumberToWords(60041, "IS", "sixty thousand forty one");
}

function test6To8DigitsIS() {
  let expected = "one hundred twenty three thousand four hundred twenty three";
  testNumberToWords(123423, "IS", expected);

  expected = "five million three hundred sixty seven thousand two";
  expected += " hundred twelve";
  testNumberToWords(5367212, "IS", expected);

  expected = "fifty three million six hundred seventy ";
  expected += 'two thousand one hundred twenty nine';
  testNumberToWords(53672129, "IS", expected);
}

function test9To10DigitsIS() {
  let expected = "five hundred thirty six million seven hundred twenty";
  expected += " one thousand two hundred twelve";
  testNumberToWords(536721212, "IS", expected);

  expected = "five billion four hundred forty five million four hundred";
  expected += " sixty three thousand two hundred fourteen";
  testNumberToWords(5445463214, "IS", expected);
}

function test11To12DigitsIS() {
  let expected = "ninety one billion four hundred sixty two million one ";
  expected += "hundred twelve thousand eight hundred ninety one";
  testNumberToWords(91462112891, "IS", expected);

  expected = "one hundred twenty three billion four hundred ninety four ";
  expected += "million seven hundred thirty three thousand ";
  expected += "four hundred fifty two";
  testNumberToWords(123494733452, "IS", expected);
}

function testEdgeCasesIS() {
  testNumberToWords(1000, "IS", "one thousand");
  testNumberToWords(1001, "IS", "one thousand one");
  testNumberToWords(10000, "IS", "ten thousand");
  testNumberToWords(10001, "IS", "ten thousand one");
  testNumberToWords(100000, "IS", "one hundred thousand");
  testNumberToWords(100001, "IS", "one hundred thousand one");
  testNumberToWords(1000000, "IS", "one million");
  testNumberToWords(1000001, "IS", "one million one");
  testNumberToWords(10000000, "IS", "ten million");
  testNumberToWords(10000001, "IS", "ten million one");
  testNumberToWords(100000000, "IS", "one hundred million");
  testNumberToWords(100000001, "IS", "one hundred million one");
}

function testEdgeCases2IS() {
  testNumberToWords(1000000000, "IS", "one billion");
  testNumberToWords(1000000001, "IS", "one billion one");
  testNumberToWords(1000600000, "IS", "one billion six hundred thousand");
  testNumberToWords(10000000000, "IS", "ten billion");
  testNumberToWords(10000000001, "IS", "ten billion one");
  testNumberToWords(10000060000, "IS", "ten billion sixty thousand");
  testNumberToWords(100000000000, "IS", "one hundred billion");
  testNumberToWords(100000000001, "IS", "one hundred billion one");
  testNumberToWords(100060000000, "IS", "one hundred billion sixty million");

  const expected = "one hundred billion six hundred million six hundred";

  testNumberToWords(100600000600, "IS", expected);
}

function testAllOfInternationalSystem() {
  testSingleDigitsIS();
  testTwoDigitsIS();
  testThreeDigitsIS();
  test4And5DigitsIS();
  test6To8DigitsIS();
  test9To10DigitsIS();
  test11To12DigitsIS();
  testHundredsIS();
  testEdgeCasesIS();
  testEdgeCases2IS();
}

testAllOfInternationalSystem();
