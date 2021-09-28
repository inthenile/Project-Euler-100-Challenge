/*
Sum square difference

Problem 6

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 +...+10^2=385
The square of the sum of the first ten natural numbers is,
(1+2+...+10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
3025-385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

//making an array from 1 to the passed parameter
function makeArray (n) {
    return [...Array(n).keys()].map(index => index+1)
    }
//Here you can specify the maximum number you want to operate with, starting from 1.
const initialArray = makeArray(100);

//making a function to map our array with, in order to store the powers of numbers within
function getPow(number){
    return Math.pow(number,2)
}

const arrayOfPowers = initialArray.map(getPow)

//Function to add the numbers in a given array
function addition(number, next){
    return number + next;
}
//storing the sum of squares.
let sumofsquares = arrayOfPowers.reduce(addition)

//storing the squares of the sum of the numbers in the array.
let arrayoftotals = initialArray.reduce(addition);

//storing the square of sum
let squareofsum = Math.pow(arrayoftotals,2)

//THE RESULT
let result = squareofsum - sumofsquares;

console.log("The result is " + result + ".");

//OUTPUTS "The result is 25164150."



