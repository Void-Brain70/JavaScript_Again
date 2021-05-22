//Guessing Game

var w=0;
var l=0;

for(var i=1;i<=5;i++)
{
    var n=prompt("Enter a number from 1 to 5");

    var r= Math.floor(Math.random()*5)+1;

    if(n==r)
    {
       console.log("YOU WIN!!!");
       w++;
    }
    else
    {
       console.log("YOU LOST!!! Rnadom number was " + r);
       l++;
    }
}
document.write("You Win " + w + " Times" + "<br>")
document.write("You Lost " + l + " Times" + "<br>")
