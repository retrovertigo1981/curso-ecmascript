// enhanced object literals

// ES5 - Object literal utilizando asignación explícita de propiedades
function newUser(user, age, country, uId) {
    return {
        user: user,    // Propiedad user con valor de la variable user
        age: age,      // Propiedad age con valor de la variable age
        country: country,  // Propiedad country con valor de la variable country
        uId: uId       // Propiedad uId con valor de la variable uId
    }
}

console.log(newUser('Fuzz', 41, 'CL', 1));

// ES6 - Object literal utilizando shorthand property names
function newUser2(user, age, country, uId) {
    return {
        user,     // Propiedad user con valor de la variable user
        age,      // Propiedad age con valor de la variable age
        country,  // Propiedad country con valor de la variable country
        uId       // Propiedad uId con valor de la variable uId
    }
}

console.log(newUser2('Juan', 35, 'PE', 2));

/*
En el primer ejemplo, se utiliza la asignación explícita de propiedades para crear un objeto literal en ES5. Cada propiedad se asigna utilizando la sintaxis nombrePropiedad: valor. Luego se retorna el objeto con las propiedades definidas.

En el segundo ejemplo, se utiliza shorthand property names introducido en ES6 para crear un objeto literal de manera más concisa. En lugar de utilizar la sintaxis nombrePropiedad: valor, simplemente se utiliza el nombre de la variable como nombre de propiedad. El valor se asigna automáticamente utilizando el nombre de la variable.

Ambos ejemplos logran el mismo resultado, pero el segundo ejemplo aprovecha la sintaxis más breve y legible de ES6 para la definición de objetos literales.
*/

