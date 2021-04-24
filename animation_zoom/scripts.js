var canvas = document.querySelector("canvas");  //Toma el lienzo del DOM

canvas.width = window.innerWidth; // Establecer el ancho del lienzo al ancho de la pantalla.
canvas.height = window.innerHeight; // Establecer la altura completa de la ventana

var context = canvas.getContext("2d"); //c:contexto, Obtiene el contexto para las funciones del canvas 2d


function draw(scale, translatePos){ 
    var canvas = document.getElementById("myCanvas"); 
    var context = canvas.getContext("2d"); 

    // clear canvas 
    context.clearRect(0, 0, canvas.width, canvas.height); 

    context.save(); 
    context.translate(translatePos.x, translatePos.y); 
    context.scale(scale, scale); 
    context.beginPath(); // begin custom shape 
    context.moveTo(-119, -20); 
    context.bezierCurveTo(-159, 0, -159, 50, -59, 50); 
    context.bezierCurveTo(-39, 80, 31, 80, 51, 50); 
    context.bezierCurveTo(131, 50, 131, 20, 101, 0); 
    context.bezierCurveTo(141, -60, 81, -70, 51, -50); 
    context.bezierCurveTo(31, -95, -39, -80, -39, -50); 
    context.bezierCurveTo(-89, -95, -139, -80, -119, -20); 
    context.closePath(); // complete custom shape 
    var grd = context.createLinearGradient(-59, -100, 81, 100); 
    grd.addColorStop(0, "#8ED6FF"); // light blue 
    grd.addColorStop(1, "#004CB3"); // dark blue 
    context.fillStyle = grd; 
    context.fill(); 

    context.lineWidth = 5; 
    context.strokeStyle = "#0000ff"; 
    context.stroke(); 
    context.restore(); 
   } 

   window.onload = function(){ 
    var canvas = document.getElementById("myCanvas"); 

    var translatePos = { 
     x: canvas.width/2, 
     y: canvas.height/2 
    }; 

    var scale = 1.0; 
    var scaleMultiplier = 0.8; 
    var startDragOffset = {}; 
    var mouseDown = false; 

    // add button event listeners 
    document.getElementById("plus").addEventListener("click", function(){ 
     scale /= scaleMultiplier; 
     draw(scale, translatePos); 
    }, false); 

    document.getElementById("minus").addEventListener("click", function(){ 
     scale *= scaleMultiplier; 
     draw(scale, translatePos); 
    }, false); 

    // add event listeners to handle screen drag 
    canvas.addEventListener("mousedown", function(evt){ 
     mouseDown = true; 
     startDragOffset.x = evt.clientX - translatePos.x; 
     startDragOffset.y = evt.clientY - translatePos.y; 
    }); 

    canvas.addEventListener("mouseup", function(evt){ 
     mouseDown = false; 
    }); 

    canvas.addEventListener("mouseover", function(evt){ 
     mouseDown = false; 
    }); 

    canvas.addEventListener("mouseout", function(evt){ 
     mouseDown = false; 
    }); 

    canvas.addEventListener("mousemove", function(evt){ 
     if (mouseDown) { 
      translatePos.x = evt.clientX - startDragOffset.x; 
      translatePos.y = evt.clientY - startDragOffset.y; 
      draw(scale, translatePos); 
     } 
    }); 

    draw(scale, translatePos); 
   }; 


// cordenadas 
//    jQuery(document).ready(function(){ 
//     $("#wrapper").mouseover(function(e){ 
//      $('#status').html(e.pageX +', '+ e.pageY); 
//     }); 
//    }) 