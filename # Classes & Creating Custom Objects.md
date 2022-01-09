# Classes & Creating Custom Objects

Object Oriented Programming

Four Pillars: encapsulation, abstraction, inheritance, polymorphism

INHERITANCE:
    new child objects inherit properties from the parent (i.e. classes are built off other classes)
ENCAPSULATION:
    all the data, functions and properties are stored/defined inside the scope of the object
POLYMORPHISM:
    inherited properties can be overwritten, specifically functions and methods
ABSTRACTION:
    only having access to variables you need (PRIVATE VARIABLES);

JavaScript is a PROTOTYPE based language not OOP.

const dog = {
    name: "Mickey",
    color: "brown",
    species: "terrier",
    bark: function(){
        return `${this.name} says woof!`;
    }
}

console.log(dog)//shows dog object
console.log(dog.bark())//"Mickey says woof!"

THIS allows access to internal properties WITHIN THE SCOPE OF THE OBJECT.

But if we want to make a new dog, we have to redeclare all this again (const dog2, dog3, etc.);

We can write DRY code by creating a dog CONSTRUCTOR.

function Dog(name, color, species){
    this.name = name;
    this.color = color;
    this.species = species;
    this.bark = function(){
        return `${this.name} says woof!`
    }
}
const dog = new Dog("Mickey", "brown", "terrier")
const dog1 = new Dog("Puddles", "grey", "french bulldog");

Each instance is now an object with the properties that have been passed in as arguments.

but we don't want to keep using function definitions so we use CLASS:

class Dog { //this is an example of encapsulation, all our object properties are contained in the class
    constructor(name, color, species){
        this.name = name;
        this.color = color;
        this.species = species;
    }
    bark(){ return `${this.name} says woof!`}
}

So if you're making a game about dogs you can code all the properties of the dog here and then access
them as needed throughout the game even if you have dozens or hundres of instances of Dog.

But what if there is a special dog that has a special ability?

Dog.prototype.dance = function() { //prototype adds method to the property at will
    return `${this.name} is dancing!"
}
console.log(dog1.dance());


##INHERITANCE
class Animals {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    hunt(){
        return `${this.name} went hunting!`
    }
    birthday(){
        this.age++
        return `${this.name} is now ${this.age} years old!`
    }
    isAlive(){
        if (this.age > 12) {
            return `${this.name} is dead!`;
        }
        return ${this.name} is alive!`;
    }
}
const birdy = new Animals("Birdy", 11);
console.log(birdy.isAlive());//Birdy is alive!

class Cat extends Animals{
    //cat will inherit all functions in Animals, and we can add more
    constructor(name, age, species, color){
        super(name, age) //inherits this.name/this.age from parent so no need to do this again
        this.species = species;
        this.color = color;
    }

    //cat inherits hunt() and birthday()
    //we add meow() only to cat class;
    meow(){
        return `${this.name} says meow`
    }

    //polymorphism changes the behavior defined in the parent
    birthday(){
        this.age += 2; //cats will age 2 years for each birthday, animals still age 1 year
        return `${this.name} is now ${this.age} years old!`
    }
}

And that's OBJECT ORIENTED PROGRAMMING in a nutshell!