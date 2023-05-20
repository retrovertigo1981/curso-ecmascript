// Creación de un nuevo objeto Set
const list = new Set();

// Agregar elementos al conjunto usando el método add()
list.add('item 1');
list.add('item 2').add('item 3'); // Encadenamiento de métodos add()

// Imprimir el conjunto en la consola
console.log(list);

// En este código, se crea un nuevo objeto Set llamado list utilizando la sintaxis new Set(). El objeto Set es una colección de valores únicos en JavaScript.

//const list = new Set();

// Se utilizan los métodos add() del objeto Set para agregar elementos al conjunto. En la primera línea, se agrega el valor 'item 1' al conjunto utilizando list.add('item 1'). En la línea siguiente, se muestra un ejemplo de encadenamiento de métodos, donde se agrega 'item 2' y 'item 3' al conjunto en una sola expresión utilizando list.add('item 2').add('item 3').

// list.add('item 1');
// list.add('item 2').add('item 3');

// Finalmente, se imprime el conjunto list en la consola mediante console.log(list). El resultado será un objeto Set que contiene los elementos agregados, en este caso, 'item 1', 'item 2' y 'item 3'.

// console.log(list);

// El objeto Set en ECMAScript 6 proporciona una forma conveniente de almacenar y manipular conjuntos de valores únicos, evitando duplicados automáticamente.

