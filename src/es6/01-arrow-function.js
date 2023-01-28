// Funcion 
function square(number) {
    return number * number;
}

// Funcion flecha / arrow function
// Se la puede declarar con var, let o const, pero es recomendable declararla con const
const square = (number) => {
    return number * number;
}

// La funcion anterior se puede simplificar todavia mas dejando el return implicito
// Si la funcion tendra multiples lineas de codigo o mucha logica, si son necesarios los {}
const square = number => number * number;