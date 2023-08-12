class Ninja {
    constructor(name) {
        this.name = "Lucky";
        this.health = 100;
        this.speed = 5;
        this.strength = 10;
    }
    sayName() { }
    showStats() { }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 500;
        this.speed = 100;
        this.strength = 10;
        this.widsom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log(
            "What one programmer can do in one month, two programmers can do in two months."
        );
    }
    showStats() {
        console.log(
            `Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.widsom}`
        );
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();
