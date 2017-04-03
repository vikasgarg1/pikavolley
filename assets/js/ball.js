// Main Shape Ball & Proto
function Ball (positionX, positionY, color) {
  Shape.call(this, positionX, positionY, color)
  this.radius = 20
  this.startAngle = 0
  this.endAngle = 360
  this.speed = 100
}
Ball.prototype = Object.create(Shape.prototype)
Ball.prototype.constructor = Shape

  // Ball.prototype.checkColission = function () {
  //   if (this.positionY >= this.edgeBottom) this.hitBottom = true
  //   if (this.positionY <= this.edgeTop) this.hitTop = true
  //   if (this.positionX >= this.edgeRight) this.hitRight = true
  //   if (this.positionX <= this.edgeLeft) this.hitLeft = true
  // }

  // var tx = targetX - x,
  //       ty = targetY - y,
  //       dist = Math.sqrt(tx*tx+ty*ty),
  //       rad = Math.atan2(ty,tx),
  //       angle = rad/Math.PI * 180;
  //
  //       velX = (tx/dist)*speed,
  //       velY = (ty/dist)*speed;
  //
  //       x += velX
  //       y += velY
  //
  //       ctx.clearRect(0,0,500,500);
  //       ctx.beginPath();
  //       ctx.arc(x,y,5,0,Math.PI*2);
  //       ctx.fill();

  Ball.prototype.arcTo = function (x, y) {
    this.positionX += x
    this.positionY += y
  }

  Ball.prototype.move = function (modifier) {
    var tx = Math.abs((this.speed * modifier) - this.positionX)
    var ty = Math.abs((this.speed * modifier) - this.positionY)
    console.log('posX, posY', this.positionX, this.positionY)
    console.log('tx ty', tx, ty)
    var dist = Math.sqrt(tx * tx + ty * ty)
    var velX = (tx / dist) * this.speed * modifier
    var velY = (ty / dist) * this.speed * modifier
    this.arcTo(velX, velY)
  }

  Ball.prototype.hitBottom = function () {
    return this.positionY >= this.edgeBottom
  }
