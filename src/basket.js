const basket = {
    items: [],
    capacity: 10,

    addToBasket: function (item) {
        if (this.isFull()) {
            return false; 
        } else {
            this.items.push(item);
            return true;
        }
    },

   isFull: function () {
        return this.items.length >= this.capacity;
    },  
};

export default basket;