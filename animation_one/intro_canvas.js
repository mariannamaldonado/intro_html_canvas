var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d"); //c:contexto

c.fillStyle ='rgba(255, 0, 0, 0.5)'
c.fillRect(100, 100, 100, 100);
c.fillStyle ='rgba(0, 0, 255, 0.5)'
c.fillRect(600, 200, 100, 100);
c.fillStyle ='rgba(0, 255, 0, 0.5)'
c.fillRect(300, 300, 100, 100);
console.log(canvas);


// heart
// canvas = document.getElementById("canvas");
// var context = canvas.getContext("2d");
// canvas.x = 150;
// canvas.y = 150;


var w = 200, h = 200;

c.strokeStyle = "#000000";
c.strokeWeight = 3;
c.shadowOffsetX = 4.0;
c.shadowOffsetY = 4.0;
c.lineWidth = 10.0;
c.fillStyle = "#FF0000";
var d = Math.min(w, h);
var k = 120;

c.moveTo(k, k + d / 4);
c.quadraticCurveTo(k, k, k + d / 4, k);
c.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
c.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
c.quadraticCurveTo(k + d, k, k + d, k + d / 4);
c.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
c.lineTo(k + d / 2, k + d);
c.lineTo(k + d / 4, k + d * 3/4);
c.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
c.stroke();
c.fill();