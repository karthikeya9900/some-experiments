// ----------------------- global constants-------------------------------

const TENS_PLACE_WORD = ["twenty", "thirty", "forty", "fifty", "sixty",
  "seventy", "eighty", "ninety"];

const WORDS_FROM_0_TO_19 = ["", "one", "two", "three", "four", "five", "six",
  "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
  "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const UNITS_OF_IN = [" thousand ", " lakh ", " crore ", " arab ",
  " karab "];

const UNITS_OF_IS = [" thousand ", " million ", " billion "];

// ----------------------- programm part -------------------------------

// ---------- common fuunctions ------------------------

function getWordFor0To19(number) {
  return WORDS_FROM_0_TO_19[number];
}

function getWordForTensPlace(number) {
  return TENS_PLACE_WORD[number - 2];
}

function generateWordForTwoDigits(number) {
  if (number < 20) {
    return getWordFor0To19(number);
  }

  const tensPlace = getWordForTensPlace(Math.floor(number / 10));
  const unitPlace = getWordFor0To19(number % 10);

  return (tensPlace + " " + unitPlace).trim();
}

function generateWordsForThreeDigits(number) {
  if (number < 100) {
    return generateWordForTwoDigits(number);
  }

  let numberInWords = "";
  numberInWords += getWordFor0To19(Math.floor(number / 100)) + " hundred ";
  numberInWords += generateWordForTwoDigits(number % 100);

  return numberInWords.trim();
}

function addUnits(numberInWords, specificUnits) {
  let numInWords = numberInWords[0];

  for (let index = 0; index < numberInWords.length - 1; index++) {
    if (numberInWords[index + 1] !== "") {
      numInWords = numberInWords[index + 1] + specificUnits[index] + numInWords;
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

function numberToWords(number) {
  if (number === 0) {
    return "zero";
  }

  return choice === "AS" ? generateWordsForIN(number) :
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

  const numberInWords = choice === "IN" ? generateWordsForIN(number) :
    generateWordsForIS(number);

  console.log(number);
  console.log("IN WORDS ==>", numberInWords);
}

convertNumberToWords();