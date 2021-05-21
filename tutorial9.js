//Area of various shapes

var b=parseFloat(prompt("Enter base->"));
var h=parseFloat(prompt("Enter height->"));

var a= b*h;
var c= (b*h)/2;

document.write("Area->"+a+<br/>);

document.write("Area of triangle->"+c);
 
//Temperature convertor

var f=parseFloat(prompt("Enter Fahrenheit->"));

var cel= (f-32)*(5/9);

document.write("Celsius->"+cel);

var c=parseFloat(prompt("Enter Celsius->"));

var fah= (c*(9/2))+32;

document.write("Fahrenheit->"+fah);