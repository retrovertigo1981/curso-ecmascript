const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 2"));

// Utilizamos el método Promise.allSettled() para esperar a que todas las promesas del arreglo sean resueltas o rechazadas.
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
    // El método then() recibe el resultado de todas las promesas en un arreglo 'response'.

// El resultado en la consola será un arreglo con tres objetos que representan el estado de cada promesa.
// Cada objeto tiene dos propiedades: 'status' y 'value' o 'reason'.
// - 'status' puede ser 'fulfilled' si la promesa se resuelve, o 'rejected' si se rechaza.
// - 'value' contiene el valor de resolución de la promesa.
// - 'reason' contiene la razón del rechazo de la promesa.

// En este ejemplo, el arreglo 'response' será:
// [{ status: 'rejected', reason: 'reject' }, { status: 'fulfilled', value: 'resolve' }, { status: 'fulfilled', value: 'resolve 2' }]

// El método Promise.allSettled() es útil cuando se desea esperar por múltiples promesas y obtener información sobre el resultado de cada una, incluso si algunas son rechazadas. Esto permite manejar adecuadamente los casos en los que se tienen varias operaciones asíncronas y se desea conocer el resultado de todas ellas sin interrumpir la ejecución por un rechazo.