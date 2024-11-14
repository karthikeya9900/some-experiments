// global constants
const DMY = "dd-mm-yyyy";
const MDY = "mm-dd-yyyy";
const YMD = "yyyy-mm-dd";
const HYPHEN = "-";

//output strings
const INVALID_FORMAT = "invalid format";
const VALID = "valid";
const DATE_FORMAT_NOT_VALID = "date not according to format";
const INVALID_YEAR = "invalid year";
const INVALID_MONTH = "invalid month";
const INVALID_DAY = "invalid day";


function slice(from, to, string) {
  let slicedString = "";

  for (let index = from; index <= to; index++) {
    slicedString += string[index];
  }

  return +slicedString;
}

function isFormatNotValid(format, date) {
  if (date.length !== 10) {
    return true;
  }

  return !(format === DMY || format === MDY || format === YMD);
}

function getDay(format, date) {
  if (format === DMY) {
    return slice(0, 1, date);
  }

  if (format === MDY) {
    return slice(3, 4, date);
  }

  if (format === YMD) {
    return slice(8, 9, date);
  }
}

function getMonth(format, date) {
  if (format === DMY) {
    return slice(3, 4, date);
  }

  if (format === MDY) {
    return slice(0, 1, date);
  }

  if (format === YMD) {
    return slice(5, 6, date);
  }
}

function getYear(format, date) {
  if (format === DMY) {
    return slice(6, 9, date);
  }

  if (format === MDY) {
    return slice(6, 9, date);
  }

  if (format === YMD) {
    return slice(0, 3, date);
  }
}

function isYearValid(year) {
  return year >= 1 && year <= 9999;
}

function isMonthValid(month) {
  return month >= 1 && month <= 12;
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }

  return year % 4 === 0 && !(year % 100 === 0);
}

function extractDaysFromMonths(year, month) {
  const is30Month = month === 4 || month === 6 || month === 9 || month === 11;

  if (is30Month) {
    return 30;
  }

  const JanOrMarOrMay = month === 1 || month === 3 || month === 5;
  const JulOrAugOrOct = month === 7 || month === 8 || month === 10;

  if (JanOrMarOrMay || JulOrAugOrOct || month === 12) {
    return 31;
  }

  return isLeapYear(year) ? 29 : 28;

}

function hasOnlyDigitsAndHyphens(format, date) {
  for (let index = 0; index < date.length; index++) {
    if (date[index] === format[index] || date[index] === "" + (+date[index])) {
      return false;
    }
  }

  return true;
}

// need to rename this function
function validate(format, date) {
  if (isFormatNotValid(format, date)) {
    return INVALID_FORMAT;
  }

  if (!hasOnlyDigitsAndHyphens(format, date)) {
    return DATE_FORMAT_NOT_VALID;
  }

  return;

}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {

  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-ab-2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-ab 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-10-  20', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-10-20', 'invalid format');
  // testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  // testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  // testValidate('mm-dd-yyyy', '13-01-0000', 'invalid month');
  // testValidate('mm-dd-yyyy', '01-60-0000', 'invalid day');
}

testAll();