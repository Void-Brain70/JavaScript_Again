//Event Listener
// document.querySelector("button").addEventListener("click",change);


// function change()
// {
//     alert("UAP");
// }

// document.querySelector("button").addEventListener("click",function(){
//     alert("UAP");
// });

var h=document.querySelector("h3");
h.addEventListener("mouseover",function()
{
   //alert("OK");
   h.classList.add("mystyle");
});


h.addEventListener("mouseout",function()
{
   //alert("OK");
   h.classList.remove("mystyle");
});