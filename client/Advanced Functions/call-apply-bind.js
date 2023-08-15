// Call(), Apply()
function introduce(name, lastName) {
    console.log(`Hello ${name} ${lastName}, my name is ${this.name}`);
}

introduce('Gosho', 'Georgiev'); // Global invocation

let person = {
    name: 'Pesho'
}

introduce.call(person, 'Maria', 'Mileva'); // Invoke useing call()
introduce.apply(person, ['Hristo', 'Yonkov']); // Invoke useing apply()

// Bind()
let superHuman = {
    name: 'Superman'
}
// You can save function context for later use!
let bindIntroduce = introduce.bind(superHuman, 'Lois', 'Lane');
bindIntroduce();
// You can use bind with different parameters!
let bindIntroduceNew = introduce.bind(superHuman);
bindIntroduceNew('Lex', 'Luther');