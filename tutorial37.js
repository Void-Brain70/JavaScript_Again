//Hoisting and strict mode

x=20;
console.log(x);
var x;

//Given ReferenceError
x=70;
console.log(x);
let x;

//Given SyntaxError
x=70;
console.log(x);
const x;

//hoisting
x=10;
if(true)
{
    y=15;
    console.log(`Y=${y}`);
    var y;
}
console.log(`X=${x}`);
var x;

//strict mode
"use strict"
x=70;
console.log(`X=${x}`);



