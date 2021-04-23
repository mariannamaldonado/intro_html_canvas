# intro_html_canvas
CHEAT SHEET
============


*Hoja de referencia con atajos*

--

|  | Descripción |
| ----------- | ------------ |
| const canvas = document.querySelector('canvas') | Toma el lienzo del DOM  |
| const c = canvas.getContext('2d') |  Obtiene el contexto para las funciones del canvas 2d | 
| canvas.width = window.innerWidth |  Establecer el ancho del lienzo al ancho de la pantalla. | 
| canvas.height = window.innerHeight |  Establecer la altura completa de la ventana | 

### Dibujar formas básicas

|  | Descripción |
| ----------- | ------------ |
| c.fillRect(x, y, width, height)  | Rectángulos - Rellenos |
| c.strokeRect(x, y, width, height) | Rectángulos - Trazos |
|c.arc(x, y, radius, startAngle, endAngle, drawClockwise) | Círculos |
| | |

### JavaScript Object
```
function Object(x, y, radius, color) { this.x = x  this.y = y
 this.radius = radius
 this.color = color
}
```

### Classes con ES6
```
class Object {
 constructor(x, y, radius, color) {
 this.x = x
 this.y = y
 this.radius = radius
 this.color = color
 }
}
```

### Métodos 
```
Object.prototype.draw = function() {
/* Dibuja formas de lienzo aquí */
}
```
```
Object.prototype.update = function() {
 this.draw()
  /*  Actualice las propiedades del objeto aquí  */
}
```
### Creating / Instantiating Objects
### Singular Object

```
// Los argumentos deben reemplazarse por valores reales
const object = new Object(x, y, radius, color)
```

### Creating / Instantiating Objects Continued...
### Multiple Objects
```
let objectArray = [] // Create holder to store multiple objects
for (let i = 0; i < 800; i++) {
 const x = Math.random() * canvas.width
 const y = Math.random() * canvas.height
 const radius = Math.random() * 5
 const color = 'blue'
 objectArray.push(new Object(x, y, radius, color)) // Store objects in holder array
}
```
### Animating Objects
```
function animate() {
 requestAnimationFrame(animate) // Create an animation loop
 c.clearRect(0, 0, canvas.width, canvas.height) // Erase whole canvas

 // Animate singular object
 object.update()
 // Animate multiple objects
 objects.forEach(object => {
 object.update()
 })
}
animate() // Llame a la función para activar la animación
```

### Events
### Mouse Move
```
// Objeto para almacenar las coordenadas del mouse
const mouse = {
 x: undefined,
 y: undefined
}
// Set mouse position relative to window
addEventListener('mousemove', event => {
 mouse.x = event.clientX
 mouse.y = event.clientY
})
```

### Cambiar el tamaño del navegador
```
// Establecer el lienzo al tamaño de la ventana
addEventListener('resize', event => {
 canvas.x = window.innerWidth
 canvas.y = window.innerHeight
})
```
### Otros tipos de eventos comunes 
```
'mouseenter'
'mouseleave'
'mousedown'
'mouseup'
'keydown'
'keyup'
'touchmove'
'touchenter'
'touchleave'
```


### Ejemplo
```
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const mouse = {
 x: undefined,
 y: undefined
}
// Event Listeners
addEventListener('mousemove', event => {
 mouse.x = event.clientX
 mouse.y = event.clientY
})
addEventListener('resize', () => {
 canvas.width = innerWidth
 canvas.height = innerHeight
 init()
})
// Objects
function Circle(x, y, radius, color) {
 this.x = x
 this.y = y
 this.radius = radius
 this.color = color
 this.velocity = {
 x: Math.random() - 0.5, // Random x value from -0.5 to 0.5
 y: Math.random() - 0.5 // Random y value from -0.5 to 0.5
 }
}
Circle.prototype.draw = function() {
 c.beginPath()
 c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
 c.fillStyle = this.color
 c.fill()
 c.closePath()
}

Object.prototype.update = function() {
 this.draw()

 this.x += this.velocity.x // Move x coordinate
 this.y += this.velocity.y // Move y coordinate
}
// Implementation
let circles
function init() {
 for (let i = 0; i < 800; i++) {
 const x = Math.random() * canvas.width
 const y = Math.random() * canvas.height
 const radius = Math.random() * 5
 const color = 'blue'
 circles.push(new Circle(x, y, radius, color))
 }
}
// Animation Loop
function animate() {
 requestAnimationFrame(animate) // Create an animation loop
 c.clearRect(0, 0, canvas.width, canvas.height) // Erase whole canvas
 circles.forEach(circle => {
 circle.update()
 })
}
init()
animate()
```
