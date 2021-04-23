var canvas = new fabric.Canvas('c');

canvas.backgroundColor = 'yellow';

//global variables 
canvasScale = 1; //global
SCALE_FACTOR = 1.01;//global 18/05/2015

var HideControls = {
            'tl':true,
            'tr':false,
            'bl':false,
            'br':false,
            'ml':false,
            'mt':false,
            'mr':false,
            'mb':false,
            'mtr':false
        };

 var circle = new fabric.Circle({
                  radius: 20, 
                  fill: 'red', 
                  left: 100, 
                  top: 100
                });
circle.setControlsVisibility(HideControls);
            canvas.add(circle);


var square = new fabric.Rect({
              left: 130, 
              top: 140,
              fill: 'green',
              width: 40,
              height: 80
            });
            canvas.add(square);

canvas.renderAll();

$('#zoomIn').on('click', function(event) {
    zoomIn();
 });

$('#zoomOut').on('click', function(event) {
    zoomOut();
 });

var site_url =  './animation_six/img/wall.jpg';

fabric.loadSVGFromURL(site_url, function(objects) { 
          var group = new fabric.PathGroup(objects, { 
          left: 165, 
          top: 100, 
          width: 295, 
          height: 211 
        }); 
        canvas.add(group); 
        canvas.renderAll(); 
          }); 


 function zoomIn() {

      canvasScale = canvasScale * SCALE_FACTOR;

      canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
      canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

      var objects = canvas.getObjects();
      for (var i in objects) {
          var scaleX = objects[i].scaleX;
          var scaleY = objects[i].scaleY;
          var left = objects[i].left;
          var top = objects[i].top;

          var tempScaleX = scaleX * SCALE_FACTOR;
          var tempScaleY = scaleY * SCALE_FACTOR;
          var tempLeft = left * SCALE_FACTOR;
          var tempTop = top * SCALE_FACTOR;

          objects[i].scaleX = tempScaleX;
          objects[i].scaleY = tempScaleY;
          objects[i].left = tempLeft;
          objects[i].top = tempTop;

          objects[i].setCoords();
      }
  
     
      canvas.renderAll();
  }

function zoomOut (){
  
      canvasScale = canvasScale / SCALE_FACTOR;

      canvas.setHeight(canvas.getHeight() * (1 / SCALE_FACTOR));
      canvas.setWidth(canvas.getWidth() * (1 / SCALE_FACTOR));

      var objects = canvas.getObjects();
      for (var i in objects) {
          var scaleX = objects[i].scaleX;
          var scaleY = objects[i].scaleY;
          var left = objects[i].left;
          var top = objects[i].top;

          var tempScaleX = scaleX * (1 / SCALE_FACTOR);
          var tempScaleY = scaleY * (1 / SCALE_FACTOR);
          var tempLeft = left * (1 / SCALE_FACTOR);
          var tempTop = top * (1 / SCALE_FACTOR);

          objects[i].scaleX = tempScaleX;
          objects[i].scaleY = tempScaleY;
          objects[i].left = tempLeft;
          objects[i].top = tempTop;

          objects[i].setCoords();
      }
            
      canvas.renderAll();
}
