const App = require("./App")

App.createUser("Adriano@email.com", "Adriano A")
App.createUser("Maria@email.com", "Maria Emi")
App.createUser("Jose@email.com", "José Jota")


App.deposit("Adriano@email.com", 100)

App.transfer("Adriano@email.com", "Maria@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("Jose@email.com", 2000, 24)

console.log(App.findUser("Adriano@email.com"))
console.log(App.findUser("Adriano@email.com").account)
console.log(App.findUser("Maria@email.com"))
console.log(App.findUser("Maria@email.com").account)
console.log(App.findUser("Jose@email.com"))
console.log(App.findUser("Jose@email.com").account)