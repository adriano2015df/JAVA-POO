const Product = require("./Product");

module.exports = class Posters extends Product{
    constructor(name, description, height, widht, price, inStock){
        super(name, description, price, inStock)
        this.height = height
        this.widht = widht
    }
}

