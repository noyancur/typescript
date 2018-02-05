"use strict";
/**
 * Classes are very familiar to functions
 * but classes are not hoister.
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("Deneme");
    };
    return Person;
}());
var p = new Person();
console.log(p.greet === Person.prototype.greet);
