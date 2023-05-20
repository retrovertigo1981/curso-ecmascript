// Exponenciacion en ES7

const data = 3 ** 4;
console.log(data);


// El operador de exponenciación (**), introducido en ECMAScript 7 (ES7), es una forma más sencilla de realizar operaciones de potenciación en JavaScript.
// Su sintaxis es: base ** exponente.
// Por ejemplo, 2 ** 3 devuelve el resultado de elevar 2 a la potencia de 3, es decir, 2 elevado a la tercera potencia.

// Diferencia con Math.pow():
// El operador ** ofrece una sintaxis más concisa y legible en comparación con el método Math.pow().
// Mientras que Math.pow(base, exponente) es una función que toma dos argumentos separados, el operador ** permite expresar la operación de potenciación directamente con una notación más clara.
// Por ejemplo, Math.pow(2, 3) y 2 ** 3 son equivalentes, pero el segundo es más corto y fácil de entender.

// Ejemplo de uso:
console.log(2 ** 3);
// Salida: 8
// El operador ** calcula el resultado de 2 elevado a la potencia de 3.

console.log(Math.pow(2, 3));
// Salida: 8
// La función Math.pow() también calcula el resultado de 2 elevado a la potencia de 3, pero con una sintaxis ligeramente más verbosa.

// En resumen, el operador de exponenciación (**) en ES7 proporciona una forma más simple y clara de realizar operaciones de potenciación en JavaScript en comparación con el método Math.pow(). Es una mejora que simplifica la escritura y lectura de código.
