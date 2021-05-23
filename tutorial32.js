//Add Animation

for(var i=0;i<3;i++)
{
    var m = document.querySelectorAll(".mybutton")[i];
    m.addEventListener("click",function()
    {
       var text=this.innerHTML;
       audioPlay(text);
       animation(text);
    });
}

function audioPlay(text)
{
    switch(text)
    {
         case "A":
             var audio=new Audio("sounds/music1.mp3");
             audio.play(); 
             break; 
         case "B":
             var audio=new Audio("sounds/music2.mp3");
             audio.play(); 
             break;
         case "C":
             var audio=new Audio("sounds/music3.mp3");
             audio.play(); 
             break;                            
    }
}

function animation()
{
    var sb=document.querySelector("."+text);
    sb.classList.add("anim");

    setTimeout(function()
    {
        sb.classList.remove("anim");
    },1000);
}
