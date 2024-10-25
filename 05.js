/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'F', 100) => -279.67
    convert('K', 'C', 100) => -173.15

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function celsiusToKelvins(value) {
  return value + 273.15;
}

function celsiusToFahrenheit(value) {
  return ((value * 9) / 5 + 32);
}

function kelvinsToFahrenheit(value) {
  return ((value - 273.15) * 9) / 5 + 32;
}

function kelvinsToCelsius(value) {
  return value - 273.15;
}

function fahrenheitToKelvins(value) {
  return (((value - 32) * 5) / 9) + 273.15;
}

function fahrenheitToCelsius(value) {
  return ((value - 32) * 5) / 9;
}

function fromCelsius(from, to, value) {
  if (from === to) {
    return value;
  }
  if (to === "K") {
    return celsiusToKelvins(value)
  }
  if (to === "F") {
    return celsiusToFahrenheit(value);
  }

  return "NaN";
}

function fromKelvins(from, to, value) {
  if (from === to) {
    return value;
  }
  if (to === "C") {
    return kelvinsToCelsius(value);
  }
  if (to === "F") {
    return kelvinsToFahrenheit(value)
  }

  return "NaN";
}

function fromFahrenheit(from, to, value) {
  if (from === to) {
    return value;
  }
  if (to === "K") {
    return fahrenheitToKelvins(value);
  }
  if (to === "C") {
    return fahrenheitToCelsius(value);
  }

  return "NaN";
}

function isNaN(value) {
  return "" + value === "NaN";
}

function convert(from, to, value) {
  if (isNaN(value) || value !== +value) {
    return "NaN";
  }
  if (from === "C") {
    return fromCelsius(from, to, value);
  }
  if (from === "K") {
    return fromKelvins(from, to, value);
  }
  if (from === "F") {
    return fromFahrenheit(from, to, value)
  }
}

function getmark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function prepareMessage(from, to, value, expected) {
  const actual = convert(from, to, value);
  const markSegment = getmark(expected, actual) + value + " " + "\n" + from;
  const charSegment = " --> " + to + " is " + expected + " and actual is ";
  const message = markSegment + charSegment + "\n" + actual + "\n";

  console.log(message);
}

function testAll() {
  prepareMessage("K", "K", 100, 100);
  prepareMessage("K", "F", 100, -279.67);
  prepareMessage("K", "C", 100, -173.15);
  prepareMessage("K", "a", 100, NaN);
  prepareMessage("F", "K", 100, 310.928);
  prepareMessage("F", "F", 100, 100);
  prepareMessage("F", "C", 100, 37.778);
  prepareMessage("F", "a", 100, NaN);
  prepareMessage("C", "K", 37, 310.15);
  prepareMessage("C", "F", 37, 98.6);
  prepareMessage("C", "C", 37, 37);
  prepareMessage("C", "a", 0, NaN);
}

testAll();
