class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return this.name + ' says Hello!';
    }
}

console.log(new Person('Timur').greet());