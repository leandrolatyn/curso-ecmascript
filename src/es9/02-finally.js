const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Todo perfecto!');
        } else {
            reject('Algo salió mal!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finnaly'));