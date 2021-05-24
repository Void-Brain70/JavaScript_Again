//canvas

var c= document.getElementById("mycanvas");

var ct = c.getContext("2d");

ct.lineWidth=3;
ct.strokeStyle="black";
ct.strokeRect(10,10,380,280);
ct.fillStyle="green";
ct.fillRect(12,12,376,276);

var centerX=c.width/2;
var centerY=c.height/2;

ct.beginPath();
ct.arc(centerX,centerY,80,0,2*Math.PI,false);
ct.fillStyle="red"
ct.fill();
ct.stroke();