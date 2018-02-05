let displayColor = function(message, ...colors) {

    console.log(message);
    console.log(colors);


}

let colorArray = ["Orange","Yellow","Indigo"];
let message = "Colors: ";

displayColor(message, ...colorArray);