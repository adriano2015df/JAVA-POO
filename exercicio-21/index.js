const App = require('./App')

const app = new App()

app.createAuthor('J. R,. R Tolkein', 'Britsh', '...')
app.createAuthor('Rick riordan', 'American', '...')

const authors = app.getAuthors()
app.createBook('O Hobbit', '...', 'fantasy', 300, authors[0], '...', 19,99,100)
app.createBook('A sociedade do Anel', '...', 'fantasy', 400, authors[0], '...', 24,99,100)
app.createBook('O ladrão de raios', '...', 'fantasy', 500, authors[1], '...', 24,99,100)
app.createBook('A piramide vermelha', '...', 'fantasy', 600, authors[1], '...', 24,99,100)

const books = app.getBooks()

app.createUser('Adriano', 'adriano@email.com', '123456')

const users = app.getUsers()

app.showDatabase()

const itens = [
    {
        product: books[0],
        quantity:2
    },
    {
        product: books[1],
        quantity: 1
    },
    {
        product: books[3],
        quantity: 1
    }
]

app.createOrder(itens, users[0])

app.showDatabase()