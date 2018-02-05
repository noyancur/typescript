"use strict";
/**
 * for of loops. Return each element of variable
 */
var colors = ['Red', 'Blue', 'Green'];
for (var i in colors) {
    console.log(colors[i]);
}
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
var letters = "ABC";
for (var _a = 0, letters_1 = letters; _a < letters_1.length; _a++) {
    var letter = letters_1[_a];
    console.log(letter);
}
