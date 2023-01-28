// Var
var lastName = 'Leandro';
lastName = 'Latyn';
console.log(lastName);

// Let
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

// Const
const animal = 'Cat';
animal = 'Dog';
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // Function scope
        let fruit2 = 'Kiwi'; // Block scope
        const fruit3 = 'Banana'; // Block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();