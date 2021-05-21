//variable
//declared with the "var" keyword
var x = 10;  
var y = 20;  
var z=x+y;  
document.write(z);  

//gloabal variable
var data=200;//gloabal variable  
function a(){  
document.writeln(data);  
}  
function b(){  
document.writeln(data);  
}  
a();//calling JavaScript function  
b();

//local variable
If(10<13)
{  
   var y=20;//JavaScript local variable  
}  