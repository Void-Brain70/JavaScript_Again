//Some string function()

var n="AnikDas";
var len = n.length;
document.write(len);

//get input from user using prompt()
var text= prompt("Enter any text and give the length of text->")
document.write("Number of Character->"+text.length);

var text="Bangladesh";
document.write(text.charAt(3));

var text="Bangladesh";
document.write(text.toUpperCase());

var text="ANIKDAS";
document.write(text.toLowerCase());

var text="ANIKDAS";
document.write(text.toLocaleLowerCase());

var a= "bangladesh";
var b=" is beautiful";
var c= a.concat( b);
document.write(c);

var a= "Bangladesh";
var s=a.slice(0,4);
document.write(s);


//Task
var n= prompt("Enter first name->")
var m= prompt("Enter last name->")

var k=n.concat(m);
document.write(k);
document.write(k.length);
document.write(k.toUpperCase());
document.write(k.slice(1,2));



 



