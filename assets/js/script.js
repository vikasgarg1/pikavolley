$(function () {
  // HELPER VARS AND FUNCTIONS
  var canvas = document.getElementById('canvas')
  // var canvasWidth = canvas.width
  // var canvasHeight = canvas.height

  // CONSTRUCTOR & PROTO
  function Pikachu (positionX, positionY, color) {
    this.positionX = positionX
    this.positionY = positionY
    this.width = 100
    this.height = 100
    this.color = color
  }

  function Ball (positionX, positionY, color) {
    this.positionX = positionX
    this.positionY = positionY
    this.color = color
    this.radius = 20
    this.startAngle = 0
    this.endAngle = 360
  }

  // INSTANCE OF ALL CONSTRUCTORS
  // TODO: Must count offset by width and height
  var pikachu1 = new Pikachu(0, 400, 'red')
  var pikachu2 = new Pikachu(800, 400, 'blue')
  var ball = new Ball(200, 200, 'green')

  // CANVAS MAIN DRAWER

  if (canvas.getContext) {
    initDraw()
  } else {
    alert('sorry canvas is not supported')
  }

  function initDraw () {
    var ctx = canvas.getContext('2d')
    var shapes = [pikachu1, pikachu2, ball]

    shapes.forEach(function (shape) {
      var path = new Path2D()
      if (shape.hasOwnProperty('radius')) {
        path.arc(shape.positionX, shape.positionY, shape.radius, shape.startAngle, shape.endAngle)
      } else {
        path.rect(shape.positionX, shape.positionY, shape.width, shape.height)
      }
      ctx.fillStyle = shape.color
      ctx.fill(path)
    })
  }
})
