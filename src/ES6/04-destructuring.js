// Arrays Destructuring

// Se declara el array fruits con los elementos 'Apple' y 'Banana'

let fruits = ['Apple', 'Banana'];

// Se utiliza la sintaxis de destructuring para asignar los elementos del array a las variables a y b
let [a, b] = fruits;

console.log(a, b); // Se muestra en la consola el valor de a ('Apple') y b ('Banana')

console.log(a, fruits[1]); // Se muestra en la consola el valor de a ('Apple') y el segundo elemento del array 'Banana'


// Se declara el array fruits2 con los elementos 'Pera', 'Manzana' y 'Naranja'

let fruits2 = ['Pera', 'Manzana', 'Naranja'];

// Se utiliza la sintaxis de destructuring para asignar el tercer elemento del array a la variable fruit

let [,,fruit] = fruits2;
console.log(fruit); // Se muestra en la consola el valor de fruit ('Naranja')

// Object Destructuring

// Se declara el objeto user con las propiedades username y age

let user = { username: 'Sebastián', age: 41 };

// Se utiliza la sintaxis de destructuring para asignar las propiedades del objeto a las variables username y age

let {username, age} = user;

console.log(username, age); // Se muestra en la consola el valor de username ('Sebastián') y age (41)

console.log(username, user.age); // Se muestra en la consola el valor de username ('Sebastián') y el valor de la propiedad age del objeto (41)
