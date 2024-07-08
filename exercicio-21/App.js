const Database = require("./Database")
const Author = require("./entidades/Author")
const User = require("./entidades/user")
const Book = require("./entidades/Book")
const Poster = require("./entidades/Posters")
const Order = require("./entidades/Order")

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
       return App.#database.find('users')
    }

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors(){
       return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book) 
    }

    addBook(bookName, quantity){
        return App.#database.find('books')
    }

    getBooks(){
        return App.#database.find('books')
    }

    createPoster(name, description, height, widht, price, inStock){
        const poster = new Poster(name, description, height, widht, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantity){
        App.#database.find(posterName, quantity)
    }

    getPosters(){
        return App.#database.find('posters')
    }

    createOrder(itens, user){
        const order = new Order(itens, user)
        App.#database.saveOrder(order)
        order.data.itens.forEach(({ product, quantity }) => {
            if(product instanceof Book){
                App.#database.removeBooksFromStock(product.name, quantity)
            }else if (product instanceof Poster){
                App.#database.removePostersFromtoStock(product.name,quantity)
            }
        })
    }

    getOrders(){
        return App.#database.find('orders')
    }

    showDatabase(){
        App.#database.showStorage()
    }

}