class MagicNumber {

    constructor(difficulty = "", magicNumber = 0, playerLifes = 0) {
        this.difficulty = difficulty;
        this.magicNumber = magicNumber;
        this.playerLifes = playerLifes;
    }

    get getDifficulty() {
        return this.difficulty;
    }

    set setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }

    get getMagicNumber() {
        return this.magicNumber;
    }

    set setMagicNumber(magicNumber) {
        this.magicNumber = magicNumber;
    }

    get getPlayerLifes() {
        return this.playerLifes;
    }

    set setPlayerLifes(playerLifes) {
        this.playerLifes = playerLifes;
    }

    generateRandomNumber() {
        var randomNumber = Math.floor((Math.random() * 100));
        this.setMagicNumber = randomNumber;
    }

    lifesDifficulties() {
        if (this.difficulty === "hard") {
            this.setPlayerLifes = 3;
        } else if (this.difficulty === "easy") {
            this.setPlayerLifes = 6;
        }
    }

    substractLifes() {
        if (this.playerLifes > 0) {
            this.playerLifes--;
        }
    }

    youLoose() {
        if (this.playerLifes <= 0) {
            return true;
        } else {
            return false;
        }
    }

    matchNumber(userNumber) {
        const MATCH = 0,
            NOT_MATCH_UP = 1,
            NOT_MATCH_DOWN = 2;
        if (userNumber == this.magicNumber) {
            return MATCH;
        } else if (userNumber > this.magicNumber) {
            return NOT_MATCH_DOWN;
        } else if (userNumber < this.magicNumber) {
            return NOT_MATCH_UP;
        }
    }
}