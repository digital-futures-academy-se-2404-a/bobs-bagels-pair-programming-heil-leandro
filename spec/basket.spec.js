import { assertEquals } from "./spec/test-framework/test-framework.js";
import basket from "../src/basket.js"
import item from "../src/item.js";

// Test 1
console.log(`Test 1`);
console.log(`==============================`);
//Arrange
let expected = true;
//Act
let actual = basket.addToBasket(item);
//Assert
let result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);

// Test 2
console.log(`Test 2`);
console.log(`==============================`);
//Arrange
expected = basket.items.length + 1;
//Act
basket.addToBasket(item);
actual = basket.items.length;
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);

// Test 3
console.log(`Test 3`);
console.log(`==============================`);
//Arrange
expected = false;
//Act
actual = basket.addToBasket(null);
//Assert
result = assertEquals(actual, expected);
//Report
console.log(result ? `Pass` : `Fail`);