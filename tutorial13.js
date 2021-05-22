//Switch,Case,Break,Defaut
//digit spelling 
//0=zero,1=one .....

/*var d=prompt("Enter any digit:");

if(d==0)
{
    document.write("Zero");  
}
else if(d==1)
{
    document.write("One");  
}
else if(d==2)
{
    document.write("Two");  
}
else if(d==3)
{
    document.write("Three");  
}
else if(d==4)
{
    document.write("Four");  
}
else if(d==5)
{
    document.write("Five");  
}
else if(d==6)
{
    document.write("Six");  
}
else if(d==7)
{
    document.write("Seven");  
}
else if(d==8)
{
    document.write("Eight");  
}
else if(d==9)
{
    document.write("Nine"); 
}
else
{
    document.write("Not a digit");
}*/

var d=prompt("Enter any digit:");

switch(d)
{
    case "0":
        document.write("Zero");
        break;
    case "1":
        document.write("One");
        break;
    case "2":
        document.write("Two");
        break;
    case "3":
        document.write("Three");
        break;
    case "4":
        document.write("Four");
        break;
    case "5":
        document.write("Five");
        break;
    case "6":
        document.write("Six");
        break;
    case "7":
        document.write("Seven");
        break;
    case "8":
        document.write("Eight");
        break;
    case "9":
        document.write("Nine");
        break;
    default:
        document.write("Not a digit");    
}

//Task
var l=prompt("Enter a latter:");
l=l.toLowerCase();

switch(l)
{
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("vowel");
    default:
        document.write("consonant");            

}


