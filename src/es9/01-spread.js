const user = { username: 'leith', age: 27, country: 'AR'};
const { username, ...values } = user;
console.log(username);
console.log(values);