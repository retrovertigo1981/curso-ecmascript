let numbers = [1, 3, 4, 6, 7, 8];

console.log(numbers.includes(4));
// Salida: true
// El método includes() verifica si el valor 4 está presente en el array numbers. Como el número 4 está en el array, devuelve true.

console.log(numbers.includes(10));
// Salida: false
// El método includes() verifica si el valor 10 está presente en el array numbers. Como el número 10 no está en el array, devuelve false.

const list = ['Oscar', 'David', 'Ana'];

console.log(list.includes('Oscar'));
// Salida: true
// El método includes() verifica si la cadena de texto 'Oscar' está presente en el array list. Como 'Oscar' está en el array, devuelve true.

const newList = list.map(e => e.toLowerCase());
console.log(newList);
// Salida: ['oscar', 'david', 'ana']
// El método map() se utiliza en el array list para generar un nuevo array, newList, donde se convierten todas las cadenas de texto a minúsculas utilizando toLowerCase().

console.log(newList.includes('oscar'));
// Salida: true
// El método includes() verifica si la cadena de texto 'oscar' está presente en el array newList. Como 'oscar' está en el array, devuelve true.



// El método includes() es un método introducido en ECMAScript 7 (ES7) para los arrays en JavaScript.
// Permite verificar si un determinado valor está presente en un array, devolviendo true si se encuentra y false si no.
// La sintaxis para usar includes() es: array.includes(valor, índiceInicial)
// - valor: El valor que se desea buscar en el array.
// - índiceInicial (opcional): El índice a partir del cual comenzar la búsqueda (por defecto es 0).