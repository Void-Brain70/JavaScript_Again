//DOM creating adding removing
//
var l=document.getElementsByTagName("a")[0];
l.innerHTML="Facebook";

l.style.textDecoration="none";
l.style.color="skyblue";

l.style.fontSize="1.5rem";

l.href="http://facebook.com";

//change html element
var h1=document.getElementsByTagName("h3")[0];

h1.innerHTML="University of Asia Pacific";

//create html tag and add text 
var h3=document.createElement("h3");
var text=document.createTextNode("CSE");

h3.appendChild(text);

var d1=document.getElementById("mydiv");

d1.appendChild(h3);

//remove html tag
var h2=document.getElementsByTagName("h3")[1];
d1.removeChild(h2);

//create html tag and add text top of the page
var h0=document.createElement("h3");
var text0=document.createTextNode("Bangladesh");

h0.appendChild(text0);

var h1=document.getElementsByTagName("h3")[0];

d1.insertBefore(h0,h1);


//class add remove create

// document.getElementById("mydiv").classList;
// document.getElementById("mydiv").classList.add("myclass2");
// document.getElementById("mydiv").classList.remove("mydiv2");