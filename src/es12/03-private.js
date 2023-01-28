// Class with Setters y Getters
class User {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Metodos
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get #userAge() {
        return this.age;
    }
    set #userAge(number) {
        this.age = number;
    }
}

const sasha = new User('Sasha', 5);
console.log(sasha.userAge);
console.log(sasha.userAge = 6)