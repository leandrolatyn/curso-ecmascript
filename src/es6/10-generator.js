function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Carlos', 'Leandro', 'Miguel', 'Kaya', 'Sasha']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);