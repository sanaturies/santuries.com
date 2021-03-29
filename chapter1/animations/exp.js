
var canvas= document.getElementById('can1');
var ctx = canvas.getContext("2d");
ctx.font = "30px Keep on Truckin";
var firstupdate=Date(0,4,2021);
var newdate=Date();
var d = new Date();
d1=d.toDateString()
ctx.fillText(d1,10,50);

