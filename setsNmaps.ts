/**
 * confusing es5 feature
 * it checks this object has this property or not
 */
let mySet = Object.create(null);
mySet.id = 0;

if (mySet.id) {
    console.log("id exists");
}


/**
 * set checks is it exists, map returns data
 */
let myMap = Object.create(null);
myMap.name = "Noyan";
let val = myMap.name;

/**
 * properties can be string so writing "100" is true, but it is confusing
 */
myMap[100] = "Hello";
console.log(myMap["100"]);

let ob1 = {

};

let ob2 = {

};

myMap[ob1] = "World";
console.log(myMap[ob2]); //it is same for ob1 and ob2

console.log(ob1.toString());
console.log(ob2.toString());

/**
 * So it is lack of es5. To object returns object as a string
 */



