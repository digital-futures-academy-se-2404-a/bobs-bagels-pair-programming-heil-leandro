import { assertEquals } from "./testframework.js";

// Test 1
//Arrange
expected = true;

//Act
actual = addToBasket(item);

//Assert
result = assertEquals(actual, expected);
    
//Report
console.log(result);