// Find Min and Max Number In Array
function findMinAndMaxInArray(arr) {
  let minValue = Infinity;
  let maxValue = -Infinity;
  arr.forEach((element) => {
    if (element < minValue) minValue = element;

    if (element > maxValue) maxValue = element;
  });
  return { max: maxValue, min: minValue };
}

// Find the minimum and maximum values that can be calculated by summing exactly four of the five integers
function maxMinSum(arr) {
  let maxSum = 0;
  let minSum = 0;
  // Remove min value in array before sum
  arr
    .filter((item) => item != findMinAndMaxInArray(arr).min)
    .forEach((element) => {
      maxSum += element;
    });

  // Remove max value in array before sum
  arr
    .filter((item) => item != findMinAndMaxInArray(arr).max)
    .forEach((element) => {
      minSum += element;
    });

  return [minSum, maxSum];
}

//=============================

// Find Even elements In Array
function findEvenInArray(arr) {
  return arr.filter((element) => element % 2 == 0);
}

// Find Odd elements In Array
function findOddInArray(arr) {
  return arr.filter((element) => element % 2 != 0);
}

// Count total of Array
function countTotalOfArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

//===============================
const arr = [1, 2, 3, 4, 5];
console.log("Input Exam: ", arr);
console.log("Output");
console.log("Max Min Sum:", maxMinSum(arr));
console.log("Total Of Array:", countTotalOfArray(arr));
console.log("Max element:", findMinAndMaxInArray(arr).max);
console.log("Min element:", findMinAndMaxInArray(arr).min);
console.log("Even element:", findEvenInArray(arr));
console.log("Odd element:", findOddInArray(arr));
