"use strict";
/**
 * We have 3 types of method
 * 1 - constructor, to initialize and create objects, we can use it with object
 * 2 - static method, we can use it only for class call
 * 3 - prototype method, we can use it with object
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    Person.staticMethod = function () {
        console.log("Static Method");
    };
    Person.prototype.normalMethod = function () {
        console.log("Normal Method");
    };
    return Person;
}());
/*
let person = new Person("Alperen");
let man = new Person("Noyan");
*/
var person = new Person("Noyan");
Person.staticMethod();
person.normalMethod();
