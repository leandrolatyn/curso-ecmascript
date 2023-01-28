// Declarando
// class User {};
// Generando instancia de una clase
// const newUser = new User();

class User {
    // Metodos
    greeting() {
        return 'Hello';
    }
};

const leith = new User();
console.log(leith.greeting());

const kaya = new User();
console.log(kaya.greeting());

// Clase con constructor
class User {
    constructor () {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const carlos = new User();

// this
class User {
    // Constructor
    constructor(name) {
        this.name = name;
    }
    // Metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const onix = new User('Sasha');
console.log(onix.greeting());

// Class with Setters y Getters
class User {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get userAge() {
        return this.age;
    }
    set userAge(number) {
        this.age = number;
    }
}

const sasha = new User('Sasha', 5);
console.log(sasha.userAge);
console.log(sasha.userAge = 6)