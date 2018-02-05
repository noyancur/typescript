"use strict";
var getRegvalue = function () {
    return 10;
};
console.log(getRegvalue());
var getArrowValue = function (m, bonus) { return 104 * m + bonus; };
console.log(getArrowValue(10, 87));
console.log(typeof getArrowValue);
