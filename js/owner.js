var Owner = function (name) {
  if (!(this instanceof Owner)) return new Owner(name);

  this.name  = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function (name, type, color) {
  var bike = new Bike (name, type, color);

  this.bikes.push(bike);
};

Owner.prototype.rideBike = function (bike_name, distance) {
  if (distance > 50) {

    this.bikes.forEach(function (bike) {

      if (bike.name === bike_name) bike.takeForARide();
    })
  }
};
