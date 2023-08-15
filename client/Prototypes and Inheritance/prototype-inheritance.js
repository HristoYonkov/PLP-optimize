function Animal(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
}

Animal.prototype.walk = function() {
    console.log(`${this.name} - Walk..!`);
}

function Cat(name, age) {
    Animal.call(this, 'Cat', name, age);
}

function Dog(name, age) {
    Animal.apply(this, ['Dog', name, age]);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.makeSound = function() {
    console.log(`${this.name} - Meow..!`);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.makeSound = function() {
    console.log(`${this.name} - Bau Bau..!`);
}

let roko = new Cat('Roko', 5);
roko.walk();
roko.makeSound();
console.log(roko.type);
console.log(roko.age);

let kiki = new Dog('Kiki', 3);
kiki.walk();
kiki.makeSound();
console.log(kiki.type);
console.log(kiki.age);
