// Función newUser con parámetros por defecto utilizando operador lógico OR
function newUser(name, age, country){
    // Si el valor de name es falsy (undefined, null, false, 0, ''), se asigna 'Oscar' por defecto
    var name = name || 'Oscar';
    // Si el valor de age es falsy, se asigna 34 por defecto
    var age = age || 34;
    // Si el valor de country es falsy, se asigna 'CL' por defecto
    var country = country || 'CL';
    console.log(name, age, country);
}

newUser(); // Se llama a la función sin argumentos, por lo que se utilizarán los valores por defecto
newUser('David', 15, 'CO'); // Se llama a la función con argumentos, los valores por defecto serán reemplazados

// Función newAdmin con parámetros por defecto utilizando la sintaxis de ES6
function newAdmin(name = 'Carlos', age = 32, country = 'CL'){
    console.log(name, age, country);
}

newAdmin(); // Se llama a la función sin argumentos, por lo que se utilizarán los valores por defecto
newAdmin('Ana', 28, 'PE'); // Se llama a la función con argumentos, los valores por defecto serán reemplazados
