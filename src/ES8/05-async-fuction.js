// Definición de una función asíncrona que retorna una promesa
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        // Utilización de un operador ternario para simular una operación asíncrona exitosa o un error
        (true)
            ? setTimeout(() => resolve('Async!!!!'), 2000)  // Resuelve la promesa después de 2 segundos
            : reject(new Error('Error!'));  // Rechaza la promesa con un error
    });
};

// Definición de otra función como función asíncrona
const anotherFn = async () => {
    // Utilización del operador await para esperar a que la promesa se resuelva
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
};

console.log('Before');
anotherFn();  // Llamada a la función asíncrona
console.log('After');


// En este código se utiliza una función asíncrona con el operador async y el operador await. La función fnAsync devuelve una promesa que se resuelve después de 2 segundos o se rechaza con un error. La función anotherFn es una función asíncrona que utiliza el operador await para esperar a que la promesa de fnAsync se resuelva antes de continuar con la ejecución. Después de esperar a la resolución de la promesa, se muestra el valor resuelto en la consola y se imprime el mensaje 'Hello!'. La llamada a anotherFn se realiza de manera asíncrona, por lo que 'Before' y 'After' se imprimen antes y después de la ejecución de la función asíncrona.
