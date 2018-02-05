"use strict";
var displayColor = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
};
var colorArray = ["Orange", "Yellow", "Indigo"];
var message = "Colors: ";
displayColor.apply(void 0, [message].concat(colorArray));
