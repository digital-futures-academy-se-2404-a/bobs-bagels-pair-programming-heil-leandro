class basket {
    #items = [];
    #capacity = 10;

    addToBasket(item) {
        if (this.isFull()) {
            return false; 
        } else {
            this.items.push(item);
            return true;
        }
    };

    isFull() {
        return this.#items.length >= this.#capacity;
    };  
};

export default basket;