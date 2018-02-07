let s = Symbol("First Symbol");
console.log(typeof s);
console.log(s.toString());

let s2 = Symbol("Test");
let s3 = Symbol("Test");

console.log(s2 === s3);

let s4 = Symbol.for ('RegSymbol');
let s5 = Symbol.for ('RegSymbol');
let s6 = Symbol.for("Test");
let fname = Symbol("first name");
let person = {
    [fname] : "Noyan"
}

console.log(person);
