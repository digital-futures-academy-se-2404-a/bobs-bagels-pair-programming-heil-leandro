//Production code file

import basket from './basket.js';
import { item1, item2 } from './item.js';

//user story 1
export const addToBasket = (item) => {
    return basket.addToBasket(item);
};

//user story 2
export const removeFromBasket = (itemToRemove) => {
    return basket.removeFromBasket(itemToRemove);
}

//user story 3
export const isFull = () => {
    return basket.isFull();
};

//user story 4
export const increaseCapacity = () => {
    return basket.increaseCapacity();
}
