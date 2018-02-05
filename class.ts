/**
 * Classes are very familiar to functions
 * but classes are not hoister.
 */

class Person {
    greet(){
        console.log("Deneme");
        
    }
}

let p = new Person();
console.log(p.greet === Person.prototype.greet);