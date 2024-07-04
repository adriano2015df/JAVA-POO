const Mage = require("./Mage");
const Theif = require("./Theif");
const Warrior = require("./Warrior");

const arthur = new Mage('Arthur', 90, 4, 2, 14)
const batrice = new Theif('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({arthur, batrice, cain})

cain.switchStance()
arthur.attack(cain)
batrice.attack(arthur)

console.table({ arthur, batrice, cain})

cain.switchStance()
cain.attack(arthur)
arthur.heal(arthur)
batrice.attack(cain)