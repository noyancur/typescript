/**
 * for of loops. Return each element of variable
 */
let colors = ['Red', 'Blue', 'Green'];

for (let i in colors) {
    console.log(colors[i]);
}

for ( let color of colors) {
    console.log(color);
}

let letters = "ABC";

for ( let letter of letters ) {
    console.log(letter);
}