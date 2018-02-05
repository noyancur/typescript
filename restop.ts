var displayColors = function(message, ...colors) {
    //When we write ...colors, it means, in here a lot of paramter can come and I will call
    //them as a colors
    //Parameters turn to an array
    //Rest parameter can be used for unkonwn paramter numbers
/*
    console.log(message + " in function");
    // this message variable is in the arguments so we can reach this value
    for(let i in colors) {
        console.log(colors[i]);
    }
    */

    console.log("Length of arguments" + arguments.length);

    for(let i in colors){
    console.log(colors[i]);}



}

let message = "List of colors:";

displayColors(message,"Red");

displayColors(message,"Red","Green");
displayColors(message,"Red","Green","Blue");
