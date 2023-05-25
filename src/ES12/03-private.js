class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }

    set #uAge(n){
        this.age = n;
    }
}

const colette = new User('Steve', 18);
console.log(colette.greeting()); 
console.log(colette.uAge); 
console.log(colette.uAge = 22);

