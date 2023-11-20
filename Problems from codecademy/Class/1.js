/* class Cat {
    constructor (name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
    meow(){
        console.log('meow meow');
    }
}

var romeo = new Cat('Romeo', 7, 'brown');
console.log(romeo);
romeo.meow(); */


class User{
    constructor(name,email){
        this._name = name;
        this._email = email;
    }

    get Useremail(){
        return this._email;
    }
}

const person = new User('Arif', 'arifulislam301@gmail.com');
console.log(person.Useremail);
console.log(person._name);
console.log(person._email);