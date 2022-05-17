// This function should return true if the passed string is equal to "Hello"
function isHello (val1) {

  // TODO: write code in this function body to pass the tests

  return val1 === "Hello";

}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello (val1) {

  // TODO: write code in this function body to pass the tests

  return val1 !== "Hello";

}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan (val1, val2) {

  // TODO: write code in this function body to pass the tests

  return val1.length > val2.length;

}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels (val1) {

  // TODO: write code in this function body to pass the tests

  let vowels = 0;

  for (let i = 0; i < val1.length; i++) {

    if (["a", "e", "i", "o", "u"].includes(val1[i].toLowerCase())) {

      vowels++;

    }

  }

  return vowels % 2 !== 0;

}

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  // TODO: write code in this function body to pass the tests
  if (val1.length % 2 === 1) {

    return val1.substring((val1.length / 2), (val1.length / 2)+1) 
  } 
  
  else {

      return val1.substring((val1.length / 2)-1, (val1.length / 2)+1)
  }
}

// This function should return the name of the season for the provided
// month name. For example, "January" should return "Winter". If the provided
// value is not a valid month, an empty string ("") should be returned. Use
// the below ranges for each season:
//
// Spring - March to May
// Summer - June to August
// Autumn - September to November
// Winter - December to February
function seasonForMonth (monthName) {

  // TODO: write code in this function body to pass the tests
  if (monthName === "December" || monthName === "January" || monthName === "February") {
    return "Winter";
  }
  else if (monthName === "March" || monthName === "April" || monthName === "May") {
    return "Spring";
  }
  else if (monthName === "June" || monthName === "July" || monthName === "August") {
    return "Summer";
  }
  else if (monthName === "September" || monthName === "October" || monthName === "November") {
  return "Autumn";
  }
  
  return "";
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
