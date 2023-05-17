// Spread Operator
// Se declara el objeto person con las propiedades name y age
let person = {name: 'Sebastián', age: 41};
// Se declara la variable country con el valor 'CL'
let country = 'CL';
// Se declara el objeto data utilizando el spread operator para combinar las propiedades del objeto person y la variable country en un nuevo objeto
let data = {id: 1, ...person, country};
console.log(data); // Se muestra en la consola el objeto data con las propiedades id, name, age y country combinadas

// Rest
// Se declara la función sum con el parámetro num y el rest parameter values
function sum(num, ...values) {
    console.log(values); // Se muestra en la consola el array values con los argumentos adicionales pasados a la función
    console.log(num + values[0]); // Se muestra en la consola la suma de num y el primer valor del array values
    return num + values[0]; // Se retorna la suma de num y el primer valor del array values
}

console.log(sum(1, 1, 2, 3)); // Se muestra en la consola el resultado de llamar a la función sum con los argumentos 1, 1, 2 y 3

// ----------------------------------------

// Código anterior a ES6 - Ejemplo de combinación de objetos
var person2 = {name: 'Sebastián', age: 41};
var country2 = 'CL';

// Se crea un nuevo objeto y se copian las propiedades del objeto person
var data2 = Object.assign({}, person2);
// Se agrega la propiedad country al objeto data
data.country = country;

console.log(data);

// Código anterior a ES6 - Ejemplo de captura de argumentos en una función
function sum() {
    // Se convierte el objeto de argumentos en un array
    var values = Array.prototype.slice.call(arguments);
    var num = values.shift(); // Se remueve el primer elemento del array

    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

console.log(sum(1, 1, 2, 3));












// let array = [...'hola como estas'];
// console.log(array);

