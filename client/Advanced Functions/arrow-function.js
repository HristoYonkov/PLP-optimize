const person = {
    firstName: 'Pesho',
    lastName: 'Petrov',
    introduce() {
        // Context of arrow function is context of outer functions!
        const getFullName = () => {
            return this.firstName + ' ' + this.lastName;
        }
        console.log(`Hello, my name is ${getFullName()}`);
    }
}

person.introduce();