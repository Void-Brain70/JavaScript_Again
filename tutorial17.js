//ternary operator

var n=Number(prompt("Enter a number:"));
// if(n>0)
// {
//     document.write("Positive");
// }
// else if(n<0)
// {
//     document.write("Negative");
// }
// else
// {
//     document.write("Zero");
// }

var r=n>0 ? "Positive" : "Negative";
document.write(r);

var r=n>0? "Positive" : n<0? "Negative" : "Zero";
document.write(r);