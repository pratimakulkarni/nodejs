var fruit = require ('./objectFactory');

//get new object returned and assign value
var appleObject = fruit();
console.log("before assign for apple : "+appleObject.fruitname);
appleObject.fruitname = "Apple";
console.log("After assigning apple : "+appleObject.fruitname);