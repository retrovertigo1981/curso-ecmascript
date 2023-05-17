class User {};// Declarando una clase vacía llamada "User"

const newUser = new User(); // Creando una instancia de la clase "User"

class User2 {
    // Definición de la clase "User2"
    greeting(){
        return 'Hola carambola!!';
    }
};

const seba = new User2(); // Creando una instancia de la clase "User2"
console.log(seba.greeting()); // Llamando al método "greeting" de la instancia "seba"

const emilia = new User2(); // Creando otra instancia de la clase "User2"
console.log(emilia.greeting()); // Llamando al método "greeting" de la instancia "emilia"

// Constructor

class User {
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hola Nuevo Usuario!!';
    }
}

const martina = new User(); // Creando una instancia de la clase "User"
console.log(martina.greeting()); // Llamando al método "greeting" de la instancia "martina"

// Uso de "this" en clases

class Users {
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }
    speak() {
        return 'Hola y Bienvenido usuario';
    }
    greeting() {
        return `${this.speak()} ${this.name}, cuya edad es de ${this.age} años`;
    }
};

const yessy = new Users('Yessy', 40); // Creando una instancia de la clase "Users" con argumentos
console.log(yessy.greeting()); // Llamando al método "greeting" de la instancia "yessy"

// Getter y Setter en clases

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}

const colette = new User('Steve', 18); // Creando una instancia de la clase "User" con argumentos
console.log(colette.greeting()); // Llamando al método "greeting" de la instancia "colette"
console.log(colette.uAge); // Obteniendo el valor de la propiedad "age" utilizando el getter "uAge"
console.log(colette.uAge = 22); // Asignando un nuevo valor a la propiedad "age" utilizando el setter "uAge"


// En el código, se muestran ejemplos de cómo trabajar con clases en ES6. Se crean instancias de las clases, se definen métodos dentro de las clases y se utiliza el constructor para inicializar los objetos. Además, se demuestra el uso de "this" para acceder a las propiedades y métodos de una clase. Por último, se muestra cómo se pueden utilizar los getters y setters para acceder y modificar propiedades de una clase de forma controlada.
