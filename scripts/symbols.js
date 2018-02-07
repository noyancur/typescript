"use strict";
var s = Symbol("First Symbol");
console.log(typeof s);
console.log(s.toString());
var s2 = Symbol("Test");
var s3 = Symbol("Test");
console.log(s2 === s3);
var s4 = Symbol.for('RegSymbol');
var s5 = Symbol.for('RegSymbol');
var s6 = Symbol.for("Test");
var fname = Symbol("first name");
var person = (_a = {},
    _a[fname] = "Noyan",
    _a);
console.log(person);
var _a;
