/**
 * We can use object parameter directly as a function
 * if age>60 it returns true and diretly isSenior() will be true, vice-versa false
 */

let firstName = "Noyan";
let surName = "IDIN";

let person = {
    firstName,
    surName
};

function createPerson(firstName, lastName, age) {
    let fullName = firstName + " " + lastName;
    return  {   firstName,
                lastName, 
                fullName,
                isSenior() {
                    return age>60;
                }}
}

let p = createPerson("Noyan", "IDIN",65);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());

//console.log(person.firstName);