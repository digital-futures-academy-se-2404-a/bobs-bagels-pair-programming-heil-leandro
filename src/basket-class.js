class Basket {
    #items = [];
    #capacity = 10;

    getItems = () => {
        return this.#items;
    }

    addToBasket(item) {
        if (this.isFull()) {
            return false; 
        } else {
            this.#items.push(item);
            return true;
        }
    };

    isFull() {
        return this.#items.length >= this.#capacity;
    };  
};

export default Basket;