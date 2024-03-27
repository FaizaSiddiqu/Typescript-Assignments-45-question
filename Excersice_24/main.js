"use strict";
//Test equlity with string.
let shape1 = "triangle";
let shape2 = "rectangle";
console.log(`Is shape1 is equal to shape2?, I predict false`);
console.log(shape1 === shape2);
console.log("Is shape1 is not equal to shape2?,I predict true");
console.log(shape1 !== shape2);
// //using lower case fictions:
let lowercase = "orange";
console.log(`Is lowercase is equall to orange?,I predict true`);
console.log(lowercase.toLowerCase() === "orange");
//Numerical Test:
let num_1 = 2;
let num_2 = 5;
console.log(`Is num_1 is equal to num_2?,I predict False`);
console.log(num_1 === num_2);
console.log(`Is num_1 is not equal to num_2?,I predict True`);
console.log(num_1 !== num_2);
console.log(`Is num_1 ia greator than num_2? I priduct false`);
console.log(num_1 > num_2);
console.log(`is num_1 is less than num_2? I predict True`);
console.log(num_1 < num_2);
console.log(`Is num_1 graeter than or equal to num_2? I predict False`);
console.log(num_1 >= num_2);
console.log(`Is num_1 is less than or equal to num_2?I predict True`);
console.log(num_1 <= num_2);
//using "and" and "or" operators test:
console.log(`Is num_1 less than num_2 and num_1 + num_2 equal to 7? I predict True.`);
console.log(num_1 < num_2 && num_1 + num_2 === 7);
console.log(`Is num_1 less than num_2 or num_1 + num_2 equal to 14? I predict False.`);
console.log(num_1 > num_2 || num_1 + num_2 === 14);
// Test whether an item is in an array:
let fruits = ["mango", "orange", "banana", "Cherry"];
let fruitToCheck = "banana"; // lowercase "banana" to match array case
console.log("Is fruitToCheck in fruits? I predict true");
console.log(fruits.includes(fruitToCheck)); // Check if fruitToCheck is in fruits array
