/**
 * We have 3 types of method
 * 1 - constructor, to initialize and create objects, we can use it with object
 * 2 - static method, we can use it only for class call
 * 3 - prototype method, we can use it with object
 */
class Person {

    constructor(name) {
        this.name = name;
        console.log(`${this.name} Constructor`);
    }

    static staticMethod() {
        console.log("Static Method");
        
    }

    normalMethod() {
        console.log("Normal Method");
        
    }
}
/*
let person = new Person("Alperen");
let man = new Person("Noyan");
*/

let person = new Person("Noyan");
Person.staticMethod();
person.normalMethod();