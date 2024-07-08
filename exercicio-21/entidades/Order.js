module.exports = class Order{
    #total
    #itens
    #user

    constructor(itens, user){
        itens.forEach(({ product, quantity}) => {
            if (quantity > product.inStock){
                throw new Error('Qunatidade Insuficiente em estoque!')
            }
        })
        this.#itens = itens
        this.#user = user
        this.#total = itens.reduce((sun, { product, quantity}) => sun + (product.price * quantity),0)
    }

    get data(){
        return {
        itens: this.#itens,
        user: this.#user,
        total: this.#total
        }
    }

}