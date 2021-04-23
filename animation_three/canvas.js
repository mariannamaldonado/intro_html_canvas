var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d"); //c:contexto

// c.fillStyle ='rgba(255, 0, 0, 0.5)'
// c.fillRect(100, 100, 100, 100);
// c.fillStyle ='rgba(0, 0, 255, 0.5)'
// c.fillRect(600, 200, 100, 100);
// c.fillStyle ='rgba(0, 255, 0, 0.5)'
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);

// //line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3"
// c.stroke();

//circle
// c.beginPath();
// c.arc(300, 300, 30, Math.PI * 2, false)
// c.strokeStyle = 'blue'
// c.stroke();

// for (var i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue'
//     c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "pink";
    c.stroke();
    // c.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

var circleArray = [];

for (var i = 0; i < 100; i++) {  
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5);
  var dy = (Math.random() - 0.5);
  var radius = 30;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

// console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  for (var i = 0; i < circleArray.length; i++){
      circleArray[i].update();
  }

}

animate();




// var x = 200;
// var y = 200;
// var dx = 5;
// var dy = 5;

// var radius =30;
// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight)
//     c.beginPath();
//      c.moveTo(75,40);
//       c.bezierCurveTo(75,37,70,25,50,25);
//       c.bezierCurveTo(20,25,20,62.5,20,62.5);
//       c.bezierCurveTo(20,80,40,102,75,120);
//       c.bezierCurveTo(110,102,130,80,130,62.5);
//       c.bezierCurveTo(130,62.5,130,25,100,25);
//       c.bezierCurveTo(85,25,75,37,75,40);
//      c.fill();
//     c.strokeStyle = 'pink';
//     c.stroke();

//    if (x + radius > innerWidth || x - radius < 0) {
//        dx = -dx;
//    }
//    x += dx;
// }

// animate();
