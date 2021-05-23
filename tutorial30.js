//Event Listeners with multiple elements

var l=document.querySelectorAll(".mybutton").length;

for(var i=0;i<l;i++)
{
    var b=document.querySelectorAll(".mybutton")[i];

    b.addEventListener("click",function()
    {
       var text=this.innerHTML;
       document.querySelector("h2").innerHTML=text + "CSE";
    });
}

