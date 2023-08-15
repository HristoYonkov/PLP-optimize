function counter() {
    let counter = 0;

    return function() {
        counter++;
        console.log(counter);
    }
}

let counterBuilder = counter();
counterBuilder();
counterBuilder();
counterBuilder();
counterBuilder();
counterBuilder();
console.log(`--------------`);
let counterBuilder2 = counter();
counterBuilder2(); // 1
counterBuilder();  // 6
