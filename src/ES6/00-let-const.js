// Declaración de variable con var

var lastName = 'Peña';
lastName = 'Jorquera'; // Reasignación de valor permitida con var
console.log(lastName);

// Declaración de variable con let

let fruit = 'apple';
fruit = 'kiwi'; // Reasignación de valor permitida con let
console.log(fruit);

// Declaración de variable con const

const animal = 'Perro';
animal = 'Gato'; // Error: No se puede reasignar un valor a una variable const, ya que es de solo lectura
console.log(animal);

// Scope en JavaScript

const fruits = () => {
    if (true){
        var fruit1 = 'apple'; // La variable fruit1 está declarada con var, lo que la hace accesible fuera del bloque if, fuction scope
        let fruit2 = 'Kiwi'; // La variable fruit2 está declarada con let, lo que la hace local al bloque if, block scope
        const fruit3 = 'Banana'; // La variable fruit3 está declarada con const, lo que la hace local al bloque if, block scope
    }
    console.log(fruit1); // Acceso a fruit1 fuera del bloque if: funciona debido al comportamiento de var
    console.log(fruit2); // Error: fruit2 no está definido fuera del bloque if debido a que fue declarado con let
    console.log(fruit3); // Error: fruit3 no está definido fuera del bloque if debido a que fue declarado con const
}

fruits();


