class Animal {
    constructor(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }
    
    walk() {
        console.log(`${this.name} - Walk..`);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super('Cat', name, age);
    }
    
    makeSound() {
        console.log(`${this.name} - Meow..`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super('Dog', name, age);
    }

    makeSound() {
        console.log(`${this.name} - Bau Bau..`);
    }
}

let roko = new Cat('Roko', 5);
roko.walk();
roko.makeSound();
console.log(roko.type);
console.log(roko.age);
console.log(roko.weigh);

let kiki = new Dog('Kiki', 3);
kiki.walk();
kiki.makeSound();
console.log(kiki.type);
console.log(kiki.age);

console.log(roko.__proto__);
console.log(roko.__proto__.__proto__);