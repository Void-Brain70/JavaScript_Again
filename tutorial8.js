//calculator
var n1=prompt("Enter a number->");
var n2=prompt("Enter another number->");

n1=parseInt(n1,10);
n2=parseInt(n2,10);

var res;

res=n1+n2;
document.write(n1 + " + " + n2 + " = " + res + "<br/>");

res=n1-n2;
document.write(n1 + " - " + n2 + " = " + res + "<br/>");

res=n1*n2;
document.write(n1 + " * " + n2 + " = " + res + "<br/>");

res=n1/n2;
document.write(n1 + " / " + n2 + " = " + res + "<br/>");

res=n1%n2;
document.write(n1 + " % " + n2 + " = " + res + "<br/>");