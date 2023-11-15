class Cat {
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
romeo.meow();