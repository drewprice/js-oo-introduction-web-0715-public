var Bike = function (name, type, frameColor) {
  if (!(this instanceof Bike)) return new Bike();

  this.WHEELS = 2;

  this.name      = name;
  this.type      = type;
  this.color     = frameColor;
  this.condition = "ready to go!";
}

Bike.prototype.takeForARide = function () {
  this.condition = "needs a tune up";
}

Bike.prototype.tuneUp = function () {
  this.condition = "ready to go!";
}
