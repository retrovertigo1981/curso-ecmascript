let hello = 'Hello';
let world = 'World';

// Concatenación de strings usando el operador '+'

let epicPhrase = hello + ' ' + world + '!'; 
console.log(epicPhrase);

// Template Literals
// Uso de template literals para concatenar variables y strings

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multi-Line Strings
// Concatenación de strings en múltiples líneas usando el operador '+'

let lorem = 'Esto es un string \n' + 'esto es otra linea';

// Uso de template literals para strings de múltiples líneas

let lorem2 = `esto es una frase epica.
esta es la continuacion de esa frase epica`;

console.log(lorem);
console.log(lorem2);

/*
En el código se muestra cómo se concatenan strings utilizando el operador '+' en la variable epicPhrase, donde se concatenan las variables hello, ' ', world y '!' para formar la frase 'Hello World!'.
Luego, se muestra el uso de template literals en la variable epicPhrase2, donde se utiliza la sintaxis ${variable} para insertar el valor de las variables hello y world dentro del string sin necesidad de concatenación explícita.
A continuación, se presenta un ejemplo de concatenación de strings en múltiples líneas utilizando el operador '+' en la variable lorem.
Por último, se muestra el uso de template literals para crear strings de múltiples líneas en la variable lorem2, donde se utiliza la sintaxis con comillas invertidas para definir las líneas del string sin necesidad de concatenación explícita y con el beneficio adicional de respetar los saltos de línea y espacios.
Al imprimir en la consola lorem y lorem2, se observa la diferencia en la estructura y presentación de los strings.
*/

