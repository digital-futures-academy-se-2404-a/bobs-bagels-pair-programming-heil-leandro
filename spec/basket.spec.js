import { assertEquals } from "../spec/test-framework/test-framework.js";
import { addToBasket } from "../src/index.js";
import basket from "../src/basket.js"
import item from "../src/item.js";

// Test 1
console.log(`Test 1`);
//Arrange
let expected = true;
//Act
let actual = addToBasket(item);
//Assert
let result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);

// Test 2
console.log(`Test 2`);
//Arrange
let initialLength = basket.items.length;
expected = initialLength + 1;
//Act
addToBasket(item);
actual = basket.items.length; 
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
actual = addToBasket(null);
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);
console.log(`==============================`);