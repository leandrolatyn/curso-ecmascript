// Valores por defecto antes
function newUser(name, age, country) {
    var name = name || 'Leandro';
    var age = age || 27;
    var country = country || 'Argentina';
    console.log(name, age, country);
}

newUser();
newUser('Carlos', '28', 'España');

// Valores por defecto nuevo
function newAdmin(name = 'Leandro', age = 27, country = 'Argentina') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Carlos', '28', 'España');