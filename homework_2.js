// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = true;
let gender = isMale ? "male" : "female";
console.log("Gender is:", gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let number1 = 5;
let number2 = 8;
/* Longer way
let oneNumberIsEight = number1 === 8 || number2 === 8;
let additionOrSubtractionIsEight =
  number1 + number2 === 8 || number1 - number2 === 8;
let oneNumberIsEightOradditionOrSubtractionIsEight =
  oneNumberIsEight || additionOrSubtractionIsEight;
console.log(
  "One of the numbers is 8 or their addition or subtraction is equal to 8:",
  oneNumberIsEightOradditionOrSubtractionIsEight
);
*/

if (
  (number1 === 8 ||
    number2 === 8 ||
    number1 + number2 === 8 ||
    number1 - number2 === 8 ||
    number2 - number1 === 8) === false
) {
  console.log("None of the conditions is true");
} else {
  console.log("One of the conditions stand.");
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let stringsConcat = "Zaide " + "Kurti";
console.log(stringsConcat);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let value1 = 3;
let value2 = 1;
let value3 = 2;

if (value1 < value2 && value2 < value3) {
  console.log(value3, value2, value1);
} else if (value1 > value2 && value2 > value3) {
  console.log(value1, value2, value3);
} else if (value3 > value1 && value1 > value2) {
  console.log(value3, value1, value2);
} else if (value2 > value3 && value3 > value1) {
  console.log(value2, value3, value1);
} else if (value2 > value1 && value1 > value3) {
  console.log(value2, value1, value3);
} else {
  console.log(value1, value3, value2);
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/
let firstNumber = 10;
let secondNumber = 12;
let average = (firstNumber + secondNumber) / 2;
console.log("Average:", average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let string1 = "Humuhumunukunukuapua";
let string2 = "Nemo";
if (string1.length > string2.length) {
  console.log("Humuhumunukunukuapua is longer than Nemo.");
} else {
  console.log("Nemo is longer than Humuhumunukunukuapua.");
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let control = 8;
if (control % 1 === 0) {
  console.log("The given value is an integer.");
} else {
  console.log("The given value is not an integer.");
}

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let givenValue = 100;
let percentage = 20;
let calculatePercentage = givenValue * (percentage / 100);
console.log("Percentage:", calculatePercentage);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let givenNumber = 5;
if (givenNumber % 2 === 0) {
  console.log("The given number is even.");
} else {
  console.log("The given number is odd.");
}
