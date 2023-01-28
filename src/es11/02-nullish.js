const anotherNumber = 0;
const validate = anotherNumber ?? 5;
console.log(validate);

const anotherNumber2 = 9;
const validate2 = anotherNumber2 ?? 5;
console.log(validate2);

const anotherNumber3 = false;
const validate3 = anotherNumber3 ?? 5;
console.log(validate3);

const anotherNumber4 = null;
const validate4 = anotherNumber4 ?? 5;
console.log(validate4);

const anotherNumber5 = undefined;
const validate5 = anotherNumber5 ?? 5;
console.log(validate5);