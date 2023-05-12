// Función normal
function square(num) {
    return num * num; // La función normal utiliza la palabra clave "return" para devolver un valor
}

console.log(square(6));

// Arrow function con bloque de código
const square = (num) => {
    return num * num; // Arrow function con un bloque de código utiliza la sintaxis () => { }
}

console.log(square(6));

// Arrow function de una sola línea
const square = num => num * num; // Arrow function de una sola línea no requiere la palabra clave "return" ni las llaves {}

console.log(square(6));

/*
Las funciones normales se declaran utilizando la palabra clave function, seguida del nombre de la función y los parámetros entre paréntesis. Tienen un bloque de código delimitado por llaves {} y utilizan la palabra clave return para devolver un valor.

Las arrow functions son una sintaxis más compacta e introducida en ECMAScript 6. Se declaran utilizando la sintaxis () => {} o () => expresión. No tienen su propio this, lo que significa que heredan el this del ámbito que las rodea. Las arrow functions de bloque de código tienen un bloque de código delimitado por llaves {} y también utilizan la palabra clave return para devolver un valor.

Las arrow functions de una sola línea no requieren llaves {} ni la palabra clave return. En su lugar, devuelven implícitamente el resultado de la expresión.

Las ventajas de las arrow functions incluyen una sintaxis más concisa, un contexto léxico compartido con el ámbito que las rodea y un comportamiento especial de this.
Las funciones normales siguen siendo útiles en situaciones donde se necesita un control más explícito del ámbito this, como en la definición de métodos de objetos o en el uso de las palabras clave function y this en el cuerpo de la función.
*/

