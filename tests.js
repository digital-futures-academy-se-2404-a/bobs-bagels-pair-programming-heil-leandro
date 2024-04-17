import { assertEquals } from "./testframework.js";

// Test 1
//Arrange
let expected = true;

//Act
let actual = addToBasket(item);

//Assert
let result = assertEquals(actual, expected);
    
//Report
console.log(result);