//Production code file

import basket from './basket.js';
import item from './item.js';

//user story 1
export const addToBasket = (item) => {
    basket.push(item)
    return true;
};

//user story 2
export const removeFromBasket = (item) => {
    basket.pop(item)
    return true;
}

//user story 3
export const isFull = () => {
    if (basket.length === 10) {
        return true;
    } else {
        return false;
    }
};

//user story 4
// export const increaseCapacity = (basket)=> {
//     basket.length += 1;
//     return true;
// }
