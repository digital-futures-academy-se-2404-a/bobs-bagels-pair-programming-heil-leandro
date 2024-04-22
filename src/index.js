// Production code file

import Basket from './basket.js';  
import Item from './item.js';      

// Start a new basket
const basket = new Basket();

// Example items
const item1 = new Item();
const item2 = new Item();

// Adding items to basket
export const addToBasket = (item) => {
    return basket.addToBasket(item);
};

// Removing items from basket
export const removeFromBasket = (itemToRemove) => {
    const index = basket.items.findIndex(item => item.name === itemToRemove.name);
    if (index > -1) {
        basket.items.splice(index, 1);
        return true;
    }
    return false;
}

// Check if the basket is full
export const isFull = () => {
    return basket.isFull();
};

// Increase the capacity
export const increaseCapacity = (additionalCapacity = 5) => {
    basket.capacity += additionalCapacity;
    return basket.capacity;
}
