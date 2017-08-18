var fruit = require ('./objectFactory');

//get new object returned and assign value
var mangoObject = fruit();
mangoObject.fruitname = "Mango";
console.log("after assign mango : "+mangoObject.fruitname);