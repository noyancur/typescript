/**
 * We can add key-value pair with using Map();
 * This map contains, has, size, delete, clear() property
 */
let myMap = new Map();

myMap.set("fname","Noyan"); // key fname, value Noyan
myMap.set("age",21);
console.log(myMap.get("fname"));
console.log(myMap.get("age"));

let ob1 = {};
let ob2 = {};

myMap.set(ob1, 10);
myMap.set(ob2, 20);

console.log(myMap.get(ob1));
console.log(myMap.size);
console.log(myMap.get(ob2));

console.log(myMap.delete("fname"));
console.log(myMap.delete(ob1));
console.log(myMap.clear());
console.log(myMap.size);


console.log(myMap.has("fname"));
console.log(myMap.has(ob1));




