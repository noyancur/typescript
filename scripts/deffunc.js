"use strict";
/**
 * PUT DEFAULT PARAMETER VALUE
 */
var percentBonus = function () { return 0.1; };
var getValue = function (value, bonus) {
    if (value === void 0) { value = 30; }
    if (bonus === void 0) { bonus = 5; }
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue(undefined, 5);
