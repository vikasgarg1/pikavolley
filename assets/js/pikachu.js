// Main Shape Pikachu & Proto
function Pikachu (positionX, positionY, color) {
  Shape.call(this, positionX, positionY, color, 100, 100)
  this.speed = 200
}

// TODO: Find a better solution to check middle collision
Pikachu.prototype = Object.create(Shape.prototype)
Pikachu.prototype.constructor = Shape

Pikachu.prototype.moveLeft = function (modifier) {
  if (this.positionX <= this.edgeLeft) return
  this.moveTo(-(this.speed * modifier), 0)
}
Pikachu.prototype.moveRight = function (modifier) {
  if (this.positionX >= this.edgeRight) return
  this.moveTo(this.speed * modifier, 0)
}
