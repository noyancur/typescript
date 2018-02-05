/**
 * PUT DEFAULT PARAMETER VALUE
 */

 let percentBonus = () => 0.1;
 let getValue = function (value=30, bonus=5) {
     console.log(value + bonus);
     console.log(arguments.length);
 }

 getValue(undefined,5);