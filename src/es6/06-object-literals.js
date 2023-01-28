// Enahced object literals
function newUser(user, age, country, userId) {
    return {
        user,
        age,
        country,
        id: userId
    };
}

console.log(newUser('Leith', '27', 'Argentina', 1));