// CONSTRUCTOR & PROTOTYPE
// Main Shape Contructor & Proto
function Shape (positionX, positionY, color, width = 20, height = 20) {
  this.positionX = positionX
  this.positionY = positionY
  this.color = color
  this.width = width
  this.height = height
  this.edgeLeft = 0
  this.edgeRight = canvasWidth - this.width
  this.edgeMiddle = (canvasWidth - gutter) / 2
  this.edgeBottom = canvasHeight - this.height
  this.edgeTop = 0 + this.height
}
Shape.prototype.moveTo = function (x, y) {
  this.positionX += x
  this.positionY += y
  console.log(y, this.positionY)
}
module.exports()
