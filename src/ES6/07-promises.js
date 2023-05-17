// Definición de una función que devuelve una Promesa
const promiseExample = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!'); // Resuelve la promesa con el mensaje 'Hey!!'
        } else {
            reject('Whoooops!'); // Rechaza la promesa con el mensaje 'Whoooops!'
        }
    });
}

// Llamada a la función que retorna la Promesa
promiseExample()
    .then(response => console.log(response)) // En caso de resolución, imprime el mensaje de respuesta
    .catch(error => console.log(error)); // En caso de rechazo, imprime el mensaje de error


/*
Este código ejemplifica el uso de Promesas en ES6.
Una Promesa es un objeto que representa la finalización (o falla) de una operación asíncrona.
Permite encadenar acciones mediante los métodos .then() y .catch().
En el ejemplo, la función promiseExample() devuelve una Promesa.
Dentro del constructor de la Promesa, se resuelve o rechaza según una condición.
Si la Promesa se resuelve, se utiliza el método resolve() para retornar el mensaje 'Hey!!'.
Si la Promesa se rechaza, se utiliza el método reject() para retornar el mensaje 'Whoooops!'.
Luego, se encadenan los métodos .then() y .catch() para manejar la resolución o rechazo de la Promesa.
Si la Promesa se resuelve, se ejecuta el callback del .then() y se muestra el mensaje de respuesta.
Si la Promesa se rechaza, se ejecuta el callback del .catch() y se muestra el mensaje de error.
*/
