//for loop
for(var i=1;i<=10;i++)
{
   document.write("<h3>UAP</h3>");
}

//print 1 to 10 number
for(var i=1;i<=10;i++)
{
   document.write(" "+ i);
}

//print 0 to 100 even number
for(var i=0;i<=100;i=i+2)
{
   document.write(" "+ i);
}

//print 1 to 99 odd number
for(var i=1;i<=99;i=i+2)
{
   document.write(" "+ i);
}

//10 9 8 7.......
for(var i=10;i>=1;i=i-1)
{
    document.write(" "+ i);
}

//1+2+3+4+5=15
var s=0;
for(var i=1;i<=10;i=i+1)
{
    s=s+i;
    //document.write("sum:"+ s);
}
document.write("sum:"+s);

//
var s=0;
var a=parseFloat(prompt("Enter starting number:"));
var b=parseFloat(prompt("Enter ending number:"));
for(var i=a;i<=b;i=i+1)
{
    s=s+i;
}
document.write("summation:"+s);

