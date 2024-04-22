import { assertEquals } from "../spec/test-framework/test-framework.js";
import Basket from "../src/basket-class.js"
import Item from "../src/item-class.js";

// Test 1
console.log(`Test 1`);
//Arrange
let expected = true;
//Act
const b1 = new Basket();
const i1 = new Item();
let actual = b1.addToBasket(i1);
//Assert
let result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);

// Test 2
console.log(`Test 2`);
//Arrange
let initialLength = b1.getItems().length;
expected = initialLength + 1;
//Act
b1.addToBasket(i1);
actual = b1.getItems().length; 
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);

// Test 3
console.log(`Test 3`);
//Arrange
expected = true;
//Act
actual = b1.addToBasket(null);
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);