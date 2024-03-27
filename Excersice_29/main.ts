// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statement
// s that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["apples", "bananas", "cherries","apricot","orange"];

// / check for certain fruits using independent if statment
// // statment 1:
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
};

//statement 2:
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
};

//statemnet 3:
if (favorite_fruits.includes("apricot")) {
    console.log("You really like apricot!");
};

//statement 4:
if (favorite_fruits.includes("cherries")) {
    console.log("You really like cherries!");
};

//statement 5:
if (favorite_fruits.includes("orange")) {
    console.log("You really like orange!");
};