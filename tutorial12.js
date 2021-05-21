//logial operator
/*var n=prompt("Enter your marks->")

if(n>100 || n<0)
{
    document.write("Invalid marks");
}
else if(n>=80 && n<=100)
{
    document.write("A+");
}
else if(n>=75 && n<=79)
{
    document.write("A");
}
else if(n>=70 && n<=74)
{
    document.write("A-");
}
else if(n>=65 && n<=69)
{
    document.write("B+");
}
else if(n>=60 && n<=64)
{
    document.write("B");
}
else if(n>=55 && n<=59)
{
    document.write("B-");
}
else if(n>=50 && n<=54)
{
    document.write("C+");
}
else if(n>=45 && n<=49)
{
    document.write("C");
}
else if(n>=40 && n<=44)
{
    document.write("D");
}
else
{
    document.write("Failed!");
}

//Find a large number 

var a= prompt("Enter 1st:");
var b= prompt("Enter 2nd:");
var c= prompt("Enter 3rd:");

if(a>b && a>c)
{
    document.write("Large number:"+a);
}

else if(b>a && b>c)
{
    document.write("Large number:"+b);
}
else{
    document.write("Large number:"+c);
}*/

//Find vowel and consonent

var l=prompt("Enter a latter:");

//l=l.toLowerCase();

if(l=='a'||l=='A'||l=='e'||l=='E'||l=='i'||l=='I'||l=='o'||l=='O'||l=='u'||l=='U')
{
    document.write("The given latter is vowel");
}
else
{
    document.write("The given latter is Consonent");
}

