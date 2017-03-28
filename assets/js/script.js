$(function () {
  // HELPER VARS AND FUNCTIONS
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  var canvasWidth = canvas.width
  var canvasHeight = canvas.height

  // CONSTRUCTOR & PROTOTYPE
  // Main Shape Contructor & Proto
  function Shape (positionX, positionY, color) {
    this.positionX = positionX
    this.positionY = positionY
    this.color = color
  }
  Shape.prototype.moveTo = function (x, y) {
    this.positionX += x
    this.positionY += y
  }

  // Main Shape Pikachu & Proto
  function Pikachu (positionX, positionY, color) {
    Shape.call(this, positionX, positionY, color)
    this.width = 100
    this.height = 100
    this.step = 60
  }
  Pikachu.prototype = Object.create(Shape.prototype)
  Pikachu.prototype.constructor = Shape
  Pikachu.prototype.moveLeft = function () {
    this.moveTo(-(this.step), 0)
  }
  Pikachu.prototype.moveRight = function () {
    this.moveTo(this.step, 0)
  }

  // Main Shape Ball & Proto
  function Ball (positionX, positionY, color) {
    Shape.call(this, positionX, positionY, color)
    this.radius = 20
    this.startAngle = 0
    this.endAngle = 360
  }
  Ball.prototype = Object.create(Shape.prototype)
  Ball.prototype.constructor = Shape

  // INSTANCE OF ALL CONSTRUCTORS
  // TODO: Must count offset by width and height
  var pikachu1 = new Pikachu(0, 400, 'red')
  var pikachu2 = new Pikachu(800, 400, 'blue')
  var ball = new Ball(200, 200, 'green')
  var objects = [pikachu1, pikachu2, ball]

  // CANVAS DRAWER HELPER FUNCTIONS
  if (canvas.getContext) {
    initDraw()
  } else {
    alert('sorry canvas is not supported')
  }

  function initDraw () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    objects.forEach(function (obj) {
      ctx.fillStyle = obj.color
      if (obj.hasOwnProperty('radius')) {
        ctx.arc(obj.positionX, obj.positionY, obj.radius, obj.startAngle, obj.endAngle)
        ctx.fill()
      } else {
        ctx.fillRect(obj.positionX, obj.positionY, obj.width, obj.height)
      }
    })
    ctx.save()
  }

  function drawObject (objects) {
    objects.forEach(function (obj) {
      ctx.fillStyle = obj.color
      if (obj.hasOwnProperty('radius')) {
        ctx.arc(obj.positionX, obj.positionY, obj.radius, obj.startAngle, obj.endAngle)
        ctx.fill()
      } else {
        ctx.fillRect(obj.positionX, obj.positionY, obj.width, obj.height)
      }
    })
  }

  function draw () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.restore()
    drawObject(objects)
    ctx.save()
    window.requestAnimationFrame(draw)
  }

  // jQuery Event Listener
  var $document = $(document)

  $document.on('keydown', function (e) {
    e.preventDefault()
    var allowedKeys = [37, 39, 65, 68]
    if (allowedKeys.includes(e.keyCode)) {
      switch (e.keyCode) {
        case 37:
          pikachu2.moveLeft()
          break
        case 39:
          pikachu2.moveRight()
          break
        case 65:
          pikachu1.moveLeft()
          break
        case 68:
          pikachu1.moveRight()
          break
        default:
      }
    }
  })

  window.requestAnimationFrame(draw)
})
