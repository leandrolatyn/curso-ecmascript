// Spread operator
let person = { name: 'Leandro', age: 27 };
let country = 'Argentina';

let data = { ...person, country };
console.log(data);

// Rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4);