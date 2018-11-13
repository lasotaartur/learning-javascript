//class

class Animal {
    constructor(name) {
        this.type = "animal";
        this.name = name;
    }
    eat() {
        return "I eat food";
    }
}

const bird = new Animal("Bird");
console.log(bird);
console.log(bird.eat());

//extend
class Bird extends Animal {
    constructor(name) {
        super(name);
        this.type = "bird";
    }
    eat() {
        const text = super.eat();
        return text + " - exactly seed!";
    }
    fly() {
        return "I can fly";
    }
}

const bird2 = new Bird("Bird");
console.log(bird2);

//static
class Animal2 {
    constructor(name) {
        this.type = "animal";
        this.name = name;
    }
    static eat() {
        return "I eat food";
    }
}

console.log(Animal2.eat());
// //abstract class
// class Animal2 {
//     constructor(name) {
//         if (this.constructor === Animal2) {
//             throw new Error("This is abstract class");
//         }
//     }
// }
//
// const animal = new Animal2("Bird");
