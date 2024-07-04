const Character = require("./Character");

module.exports = class Theif extends Character {
    attack(targetCharacter){
        targetCharacter.lifepoints -= (this.attackPts - targetCharacter.defensePts) * 2
    }
}