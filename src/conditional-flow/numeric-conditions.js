// TODO: Implement the functions below to make the tests pass

// This function should return true if there are no elements in the array, false otherwise
function isArrayEmpty (array) {

  // TODO: write code in this function body to pass the tests

  return array.length === 0;

}

// This function should return true if num1 is greater than num2, false otherwise
function isGreaterThan (num1, num2) {

  // TODO: write code in this function body to pass the tests

  return num1 > num2;

}

// This function should return the lowest number in the passed array
function findLowest (nums) {

  // TODO: write code in this function body to pass the tests

  let lowNum = Infinity;

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j] && nums[i] < lowNum) {
        lowNum = nums[i];
      }

      else if (nums[j] < lowNum) {
      lowNum = nums[j];
      }
    }
  }
  return lowNum;
}

module.exports = {
  a: isArrayEmpty,
  b: isGreaterThan,
  c: findLowest
}
