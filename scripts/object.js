"use strict";
/**
 * We can use object parameter directly as a function
 * if age>60 it returns true and diretly isSenior() will be true, vice-versa false
 */
var firstName = "Noyan";
var surName = "IDIN";
var person = {
    firstName: firstName,
    surName: surName
};
function createPerson(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return { firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        isSenior: function () {
            return age > 60;
        } };
}
var p = createPerson("Noyan", "IDIN", 65);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
//console.log(person.firstName);
