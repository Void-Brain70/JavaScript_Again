//if 
var n=prompt("enter a number->")

if(n%2==0)
{
    document.write("Even");
}

if(n%2!=0)
{
    document.write("Odd");
}

//if_else
var n=prompt("enter a number->")

if(n%2==0)
{
    document.write("Even");
}
else
{
    document.write("Odd");
}

//if,else_if,else
var n=prompt("enter a number->")

if(n>0)
{
    document.write("Positive");
}
else if(n<0)
{
    document.write("Negative");
}
else
{
    document.write("Zero")
}

//Task latter grade
var n=prompt("Enter your marks->")

if(n>=80)
{
    document.write("A+");
}
else if(n>=75)
{
    document.write("A");
}
else if(n>=70)
{
    document.write("A-");
}
else if(n>=65)
{
    document.write("B+");
}
else if(n>=60)
{
    document.write("B");
}
else if(n>=55)
{
    document.write("B-");
}
else if(n>=50)
{
    document.write("C+");
}
else if(n>=45)
{
    document.write("C");
}
else if(n>=40)
{
    document.write("D");
}
else
{
    document.write("Failed!")
}



