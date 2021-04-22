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