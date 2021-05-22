//while loop

// for(var i=1;i<=100;i++)
// {
//     document.write(" "+i);
// }

var i=1;
while(i<=50)
{
    document.write(" "+i);
    i++;
}

var i=1;
var s=0;
while(i<=50)
{
    s=s+i;
    i++;
}
document.write(s);

//Task write a program that will print sum of all the number are divisible by 3 and 5

var i=1;
var s=0;
while(i<=100)
{
    if(i%3==0 && i%5==0)
    { 
        document.write(" " + i);
        s=s+i;
    }
    i++;
}
document.write(" = " + s);