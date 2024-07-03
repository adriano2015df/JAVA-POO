const Author = require("./author");

const adriano = new Author("Adriano Alves");

const post = adriano.writePost("Título do Post", "Tecnologia e você tudo há ver!")

post.addComment("José Sia", "Isso ai meu brother!")
post.addComment("Maria", "Muito Legal sua dica.")


console.log(adriano)
console.log(post)