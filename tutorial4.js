//Number method 
console.log(typeof(Number("70")));
console.log(typeof(Number("70.55")));

console.log(Number(false));
console.log(Number(true));

var a=10;
console.log(typeof(a));

//Number to String
var b=10;
c= toString(b);
console.log(typeof(c));

//string to interger
var x="10";
y= parseInt(b);
console.log(typeof(y));

//string to float
var m="10";
n= parseFloat(b);
console.log(typeof(n));

//toFixed()
var f=2.55;
console.log(f.toFixed())

var f=2.55666;
console.log(f.toFixed(2))

//toPrecision() number of length given
var f=2.55666;
console.log(f.toPrecision(3))
