// Global context
function random() {
    console.log(this === global);
}

random();

// Object context
const obj = {
    name: 'Pesho',
    random: random,
    greet() {
        console.log(this);
    }
}

obj.greet(); // method invocation
let greet = obj.greet;
greet(); // global invocation
obj.random(); // method invocation

// DOM Element invocation - Must execute in browser!
// element.addEventListener('click', function () {
//     console.log(this);
// })