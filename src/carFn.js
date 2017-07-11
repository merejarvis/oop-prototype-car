// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  make: '',
  model: '',
  year: '',
  color: '',
  seats: '',
  previousOwners: [],
  owner: 'manufacturer',
  running: false,

  sell: function (newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  },

  paint: function (newColor) {
    this.color = newColor
  },

}

Car.sell('azmeer')
Car.sell('daniel')
Car.sell('dom')
Car.sell('prima')

console.log(Car.previousOwners);

console.log(Car);

// Export the `Car` object

module.exports = Car
