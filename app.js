/////////////////////////////////////
/* Problem 1 (this is your demo)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a,b){
  var result = a + b;
  var message = 'The sum of ' + a + ' and ' + b + ' is ' + result + '.';
  // console.log(message);
  // console.log('The sum of 4 and 7 is 11.');
  return [result, message];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The product of 4 and 7 is 28."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a,b){
  var result = a * b;
  var message = 'The product of ' + a + ' and ' + b + ' is ' + result + '.';
  return [result, message];
}

testMultiply(4, 7);

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
Note: You are not allowed to use the arithmetic operators + and * in this function. Instead, you must use your existing sum() and multiply() functions to do the calculations.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a,b,c){
  var secondSum = sum(sum(a,b)[0],c)[0];
  var secondMultiply = multiply(multiply(a,b)[0],c)[0];
  var message1 = a + ' and ' + b + ' and ' + c + ' sum to ' + secondSum + '.';
  var message2 = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + secondMultiply + '.';
  return [secondSum, secondMultiply, message1, message2];
}
//the long way
/*function sumAndMultiply(a, b, c){
  var firstSum = sum(a, b)[0];
  var secondSum = sum(firstSum, c)[0];
  var firstMultiply = multiply(a, b)[0];
  var secondMultiply = multiply(firstMultiply, c)[0];
  var message1 = a + ' and ' + b + ' and ' + c + ' sum to ' + secondSum + '.';
  var message2 = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + secondMultiply + '.';
  return [secondSum, secondMultiply, message1, message2];
}*/

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"2,3,4 was passed in as an array of numbers, and 9 is their sum."
Note: You are not allowed to use the arithmetic operators + and * in this function. Instead, you must use your existing sum() and multiply() functions to do the calculations.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

/*testArray = [2,3,4];
function sumArray(testArray){
  var thirdSum = sum(sum(testArray[0], testArray[1])[0], testArray[2])[0];
  var message = testArray + ' was passed in as an array of numbers, and ' + thirdSum + ' is their sum.';
  return [thirdSum, message];
}*/

//this code accounts for array of any length
testArray = [2,3,4];
function sumArray(testArray){
  var currentSum = 0;
  var outputString = '';
  for(var i = 0; i < testArray.length; i++) {
    currentSum += testArray[i];
    outputString += testArray[i];
    if(i < testArray.length - 1){
      outputString += ',';
    }
  }
  var message = outputString + ' was passed in as an array of numbers, and ' + currentSum + ' is their sum.';
  console.log(message);
}
// Here is the test for sumArray(); uncomment it to run it
sumArray(testArray);

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The numbers 2,3,4 have a product of 24."
Note: You are not allowed to use the arithmetic operators + and * in this function. Instead, you must use your existing sum() and multiply() functions to do the calculations.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/
/*
testArray = [2, 3, 4];
function multiplyArray(testArray) {
  var thirdMultiply = multiply(multiply(testArray[0], testArray[1])[0], testArray[2])[0];
  var message = 'The numbers ' + testArray + ' have a product of ' + thirdMultiply + '.';
  return [thirdMultiply, message];
}*/

//this code also acccounts for an array of any length
testArray = [2,3,4];
function multiplyArray(testArray){
  var currentProduct = 1;
  var outputString = '';
  for(var i = 0; i < testArray.length; i++){
    currentProduct *= testArray[i];
    outputString += testArray[i];
    if (i < testArray - 1) {
      outputString = outputString + '';
    }
  }
  var message = 'The numbers ' + testArray + ' have a product of ' + currentProduct + '.';
  console.log(message);
}
// Here is the test for multiplyArray(); uncomment it to run it
multiplyArray(testArray);

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

function testSum() {
  if (sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
    console.log('%c TEST FOR sum() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sum() FAILS', 'color: red');
  }
}

function testMultiply() {
  if (multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    console.log('%c TEST FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiply() FAILS', 'color: red');
  }
}

function testSumAndMultiply() {
  if (sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumAndMultiply() FAILS', 'color: red');
  }
}

function testSumArray() {
  if (sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
  }
}

function testMultiplyArray() {
  if (multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST FOR multiplyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray() FAILS', 'color: red');
  }
}
