const canvas = document.querySelector('canvas')
canvas.width =1200;
canvas.height = 630;

const context = canvas.getContext('2d')

context.font = 'bold 70pt Raleway';
context.lineWidth = 4;
context.textAlign = 'center'

const text = 'Hello, I love u!!'

function drawTextBG(txt, font, x, y) {
    context.font = font;
    context.textBaseline = 'top';
    context.fillStyle = 'rgb(12, 16, 254)';

    var width = context.measureText(txt).width;
    context.fillRect((x-width/2)-10, y-5, width+20, 90);

    context.fillStyle = '#000';
    context.fillText(txt, x, y);
}

if (text.length > 10) {  
  const words = text.split(' ')
  const half = Math.ceil(words.length)
  const first_line = words.splice(0, half).join(' ')
  // const second_line = words.splice(-half).join(' ')

  drawTextBG(first_line, 'bold 70pt Raleway', 600, 170)
  drawTextBG(second_line, 'bold 70pt Raleway', 600, 300)

} else {
  context.fillText(text, 70, 170);
}