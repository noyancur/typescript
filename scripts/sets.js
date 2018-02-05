"use strict";
var mySet = new Set();
var ob1 = {};
var ob2 = {};
mySet.add("Hello");
mySet.add(1);
mySet.add(ob1);
mySet.add(ob2);
console.log(mySet.size);
var newSet = new Set([1, 2, 3, 4, 5, 5, 5, 34, 3, 43, 43, 4]);
console.log(newSet.size);
var chainSet = new Set().add("Hello").add("world");
console.log(chainSet.size);
/**
 * Check the value has
 */
console.log(newSet.delete(4));
console.log(newSet.delete(4));
